//const express = require('express');
const fs = require('fs');
const download = require('download');

const url="https://images.pexels.com/photos/5919667/pexels-photo-5919667.jpeg";
(async () => {
    await download(url,'dist');

    fs.writeFileSync('dist/pexels-photo-5919667.jpeg',await download(url));

    download('images.pexels.com/photos/5919667/pexels-photo-5919667.jpeg')
    .pipe(fs.createWriteStream('dist/foo.jpg'));

    //download array of images
    await Promise.all([
        'images.pexels.com/photos/5919667/pexels-photo-5919667.jpeg',
        'images.pexels.com/photos/248159/pexels-photo-248159.jpeg',
        'https://images.pexels.com/photos/1173777/pexels-photo-1173777.jpeg',
    ].map(url => download(url, 'dist')));
})();