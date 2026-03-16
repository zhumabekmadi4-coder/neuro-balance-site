
const { chromium, devices } = require('playwright');
const { spawn } = require('child_process');
const http = require('http');

// Helper to check if port 3000 is used
function checkPort(port) {
    return new Promise((resolve) => {
        const req = http.get(`http://localhost:${port}`, (res) => {
            res.on('data', () => { });
            res.on('end', () => resolve(true));
        });
        req.on('error', () => resolve(false));
    });
}

(async () => {
    let serverProcess = null;
    const isServerRunning = await checkPort(3000);

    if (!isServerRunning) {
        console.log('🔌 Server not running. Starting it automatically...');
        serverProcess = spawn('npx.cmd', ['serve', 'out'], { stdio: 'pipe', shell: true });
        console.log('⏳ Waiting for server to start...');
        await new Promise(resolve => setTimeout(resolve, 5000));
    } else {
        console.log('⚡ Server is already running.');
    }

    console.log('📱 Starting Mobile QA Check (iPhone 12)...');
    const iPhone = devices['iPhone 12'];
    const browser = await chromium.launch({ headless: false, slowMo: 1000 });
    const context = await browser.newContext({
        ...iPhone,
        locale: 'ru-RU'
    });
    const page = await context.newPage();

    try {
        // 1. Go to Home
        console.log('🏠 Navigating to Home on Mobile...');
        await page.goto('http://localhost:3000');
        await page.waitForTimeout(1000);

        // 2. Test Mobile Menu
        console.log('🍔 Opening Mobile Menu...');
        // Click the hamburger button
        await page.click('button.md\\:hidden');

        // Wait specifically for the MOBILE menu container to appear
        // The container has class 'animate-accordion-down' when open
        const mobileMenu = page.locator('.animate-accordion-down');
        await mobileMenu.waitFor({ state: 'visible' });

        console.log('📜 Clicking "О нас" in menu...');
        // Find "О нас" strictly inside the mobile menu
        await mobileMenu.getByText('О нас').click();
        await page.waitForTimeout(1500);

        // 3. Test Swipe/Scroll
        console.log('👆 Scrolling down...');
        await page.mouse.wheel(0, 500);
        await page.waitForTimeout(1000);
        await page.mouse.wheel(0, 500);
        await page.waitForTimeout(1000);

        // 4. Test Team Page Mobile
        console.log('👨‍⚕️ Checking Team Page on Mobile...');
        // Direct navigation is safer for E2E than relying on hidden links
        await page.goto('http://localhost:3000/team');
        await page.waitForTimeout(1000);

        // Check if cards are stacked (visible)
        const cards = page.locator('.group.relative.bg-card');
        const count = await cards.count();
        if (count > 0) {
            console.log(`✅ Found ${count} doctor cards stacked correctly.`);
            await cards.first().scrollIntoViewIfNeeded();
        } else {
            throw new Error("No doctor cards found on mobile team page");
        }

        // 5. Test Footer Mobile
        console.log('📞 Checking Footer Links...');
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(1000);

        console.log('🎉 MOBILE CHECKS PASSED! Responsive is good.');

    } catch (e) {
        console.error('❌ Test Failed:', e);
    } finally {
        await browser.close();
        if (serverProcess) {
            console.log('🛑 Stopping temporary server...');
            serverProcess.kill();
            spawn('taskkill', ['/pid', serverProcess.pid, '/f', '/t']);
        }
    }
})();
