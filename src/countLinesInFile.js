const fs = require('fs');
const split = require('split');

module.exports = (filePath, callback) => {
    var readError,
        lineCount;

    lineCount = 0;

    fs
        .createReadStream(filePath)
        .pipe(split())
        .on('data', (line) => {
            lineCount++;
        })
        .on('end', () => {
            if (readError) {
                return;
            }

            callback(null, lineCount - 1);
        })
        .on('error', (error) => {
            readError = true;

            callback(error);
        });
};
