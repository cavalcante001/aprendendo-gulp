var Jimp = require('jimp');

Jimp.read('images/imagem1.jpg').then(function(imagem) {
    imagem.cover(400,400).greyscale().write('imagem-bw.jpg');
}).catch(function(err) {
    console.log(error(err));
});