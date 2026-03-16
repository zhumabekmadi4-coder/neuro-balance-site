const { Jimp } = require('jimp');
const path = require('path');

const sourcePath = String.raw`C:/Users/zhuma/.gemini/antigravity/brain/10e227dd-a303-4a0e-93d4-0547e00c379a/uploaded_image_1769155755355.png`;
const destDir = String.raw`c:/Antigravity/spina-clinic/public/images`;

async function processImages() {
    try {
        const image = await Jimp.read(sourcePath);
        const width = image.bitmap.width;
        const height = image.bitmap.height;

        const halfWidth = Math.floor(width / 2);

        const kinesio = image.clone().crop(0, 0, halfWidth, height);
        const acupuncture = image.clone().crop(halfWidth, 0, width - halfWidth, height);

        await kinesio.writeAsync(path.join(destDir, 'kinesio.png'));
        await acupuncture.writeAsync(path.join(destDir, 'acupuncture.png'));

        console.log('Images processed and saved successfully.');
    } catch (error) {
        console.error('Error processing images:', error);
        process.exit(1);
    }
}

processImages();
