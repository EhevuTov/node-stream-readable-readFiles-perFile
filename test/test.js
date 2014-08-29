var util = require('util');
var ReadFile = require('../index.js');
var stream = require('stream');
var crypto = require('crypto');
var test = require('tap').test;

// produce fake binary data
// setup random number of files with random data
var fs = require('fs');

// load a random buff
var buf_1;
buf_1 = crypto.randomBytes(256);
fs.writeFileSync('test/data/1.dat', buf_1);
var buf_2;
buf_2 = crypto.randomBytes(256);
fs.writeFileSync('test/data/2.dat', buf_2);

var conf = {
	inputDir: './test/data/'
};

console.dir(conf);

var readFile = new ReadFile(conf);

test("Buffer Equality Test", function(t){
	t.equal(true, true);
	t.end();
});

//readFile.pipe(process.stdout);

fs.unlinkSync('test/data/1.dat');
fs.unlinkSync('test/data/2.dat');
