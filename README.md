# `countLinesInFile`

[![NPM version](http://img.shields.io/npm/v/count-lines-in-file.svg?style=flat-square)](https://www.npmjs.org/package/count-lines-in-file)
[![Travis build status](http://img.shields.io/travis/gajus/count-lines-in-file/master.svg?style=flat-square)](https://travis-ci.org/gajus/count-lines-in-file)
[![js-canonical-style](https://img.shields.io/badge/code%20style-canonical-blue.svg?style=flat-square)](https://github.com/gajus/canonical)

Counts the number of lines in a file using [`fs.createReadStream`](https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options) and [`split`](https://github.com/dominictarr/split).

```js
const countLinesInFile = require('count-lines-in-file');
const path = require('path');
const targetFilePath = path.resolve(__dirname, './data.txt');

countLinesInFile(targetFilePath, (error: Error, numberOfLines: number) => {

});
```
