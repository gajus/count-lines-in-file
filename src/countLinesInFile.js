const fs = require('fs');
const split = require('split');

module.exports = (filePath, callback) => {
    let lineCount = 0;

    fs
        .createReadStream(filePath)
        .pipe(split())
        .on('data', (line) => {
            lineCount++;
        })
        .on('end', () => {
            callback(null, lineCount - 1);
        })
        .on('error', (error) => {
            callback(error);
        });
};
