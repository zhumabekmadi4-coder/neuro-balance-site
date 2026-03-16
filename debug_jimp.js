try {
    const jimp = require('jimp');
    console.log('Type of require("jimp"):', typeof jimp);
    console.log('Keys:', Object.keys(jimp));
    if (jimp.default) console.log('Has default export');
    if (jimp.read) console.log('Has read method on root');
    if (jimp.Jimp) console.log('Has Jimp export');
} catch (e) {
    console.error(e);
}
