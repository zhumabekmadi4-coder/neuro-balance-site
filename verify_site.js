
const { chromium } = require('playwright');
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
        // Start npx serve
        serverProcess = spawn('npx.cmd', ['serve', 'out'], { stdio: 'pipe', shell: true });

        // Wait for server to be ready
        console.log('⏳ Waiting for server to start...');
        await new Promise(resolve => setTimeout(resolve, 5000));
    } else {
        console.log('⚡ Server is already running. Proceeding...');
    }

    console.log('🚀 Starting Automated QA Check...');
    const browser = await chromium.launch({ headless: false, slowMo: 1000 });
    const page = await browser.newPage();

    try {
        // 2. Go to Home
        console.log('🏠 Navigating to Home...');
        try {
            await page.goto('http://localhost:3000');
        } catch (e) {
            console.log('⚠️ First load timeout, retrying...');
            await page.waitForTimeout(2000);
            await page.goto('http://localhost:3000');
        }
        await page.waitForTimeout(1000);

        // 3. Test Navigation
        console.log('📜 Testing "Technologies" scroll...');
        await page.click('text=Технологии');
        await page.waitForTimeout(2000);

        // 4. Test Team Page
        console.log('👨‍⚕️ Navigating to Team Page...');
        await page.click('text=Вся команда');
        await page.waitForTimeout(1000);
        await page.waitForURL('**/team');
        console.log('✅ Team Page Loaded');

        // Back to Home
        console.log('🔙 Going back to Home...');
        await page.click('text=Вернуться на главную');
        await page.waitForURL('http://localhost:3000/');

        // 5. Test Booking Modal
        console.log('📅 Opening Booking Modal...');
        await page.click('text=Записаться >> nth=0');
        await page.waitForSelector('[role="dialog"]');
        console.log('✅ Modal Opened');
        await page.waitForTimeout(1000);
        await page.keyboard.press('Escape');

        console.log('🎉 ALL CHECKS PASSED! The site is ready for presentation.');

    } catch (e) {
        console.error('❌ Test Failed:', e);
    } finally {
        await browser.close();
        if (serverProcess) {
            console.log('🛑 Stopping temporary server...');
            serverProcess.kill();
            // Force kill if needed on Windows
            spawn('taskkill', ['/pid', serverProcess.pid, '/f', '/t']);
        }
    }
})();
