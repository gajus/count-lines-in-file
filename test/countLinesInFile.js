const test = require('ava');
const path = require('path');
const countLinesInFile = require('./../src/countLinesInFile');

test.cb('counts lines of text', (t) => {
    t.plan(2);

    const fixtureFilePath = path.resolve(__dirname, './fixtures/data-100.txt');

    countLinesInFile(fixtureFilePath, (error, result) => {
        t.is(error, null);
        t.is(result, 100);
        t.end();
    });
});
