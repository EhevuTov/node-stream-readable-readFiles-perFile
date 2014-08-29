stream-readable-buffer-read_files-per_file
===============================

[![Build Status](https://travis-ci.org/EhevuTov/node-stream-readable-buffer-read_files-per_file.svg)](https://travis-ci.org/EhevuTov/node-stream-readable-buffer-read_files-per_file)
# Description
A node transform stream in object mode that consumes a JSON object and produces a CSV record with optional header until null is consumed

Usage
-----

in your project root dir:
```
npm i stream-readable-buffer-read_files-per_file --save
```

in your program:
```
// require this module
var ReadFiles = require('stream-readable-buffer-read_files-per_file');

// instantiate a new object from the module
var readFiles = new ReadFiles();

// 'readFiles' is a readable stream that pushes a buffer per its respective file
// 'writeStream' is a writeable stream you must create on your own
readFiles.pipe(writeStream);
```
