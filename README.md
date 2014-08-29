stream-readable-read_files-per_file
===============================

[![Build Status](https://travis-ci.org/EhevuTov/node-stream-readable-read_files-per_file.svg)](https://travis-ci.org/EhevuTov/node-stream-readable-read_files-per_file)
# Description
a readable stream that emits a buffer per respective file for each file in a given directory
Usage
-----

in your project root dir:
```
npm i stream-readable-read_files-per_file --save
```

in your program:
```
// require this module
var ReadFiles = require('stream-readable-read_files-per_file');

// instantiate a new object from the module
var readFiles = new ReadFiles();

// 'readFiles' is a readable stream that pushes a buffer per its respective file
// 'writeStream' is a writeable stream you must create on your own
readFiles.pipe(writeStream);
```
