try {
    const { Jimp } = require('jimp');
    console.log('Jimp export type:', typeof Jimp);
    console.log('Jimp keys:', Object.keys(Jimp));
    console.log('Jimp prototype keys:', Object.keys(Jimp.prototype));
} catch (e) {
    console.error(e);
}
