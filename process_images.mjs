import { Jimp } from "jimp";
import path from "path";

const sourcePath = String.raw`C:/Users/zhuma/.gemini/antigravity/brain/10e227dd-a303-4a0e-93d4-0547e00c379a/uploaded_image_1769155755355.png`;
const destDir = String.raw`c:/Antigravity/spina-clinic/public/images`;

async function processImages() {
    try {
        console.log("Reading image...");
        // Try static read method first
        const image = await Jimp.read(sourcePath);

        const width = image.bitmap.width;
        const height = image.bitmap.height;
        console.log(`Dimensions: ${width}x${height}`);

        const halfWidth = Math.floor(width / 2);

        console.log("Cropping Kinesiotherapy...");
        const kinesio = image.clone();
        kinesio.crop({ x: 0, y: 0, w: halfWidth, h: height });

        console.log("Cropping Acupuncture...");
        const acupuncture = image.clone();
        acupuncture.crop({ x: halfWidth, y: 0, w: width - halfWidth, h: height });

        await kinesio.write(`${destDir}/kinesio.png`);
        await acupuncture.write(`${destDir}/acupuncture.png`);

        console.log('Images processed and saved successfully.');
    } catch (error) {
        console.error('Error processing images:', error);
        process.exit(1);
    }
}

processImages();
