var Readable = require('stream').Readable;
var util = require('util');
var fs = require('fs');

var Counter = function (opt) {
	Readable.call(this, opt);
	this.opt = opt;
};
util.inherits(Counter, Readable);

// read all dir files and push their respective buffer to a consumer
Counter.prototype._read = function() {
	var counter = this;
	var i = 1;
	fs.readdirSync(counter.opt.inputDir).forEach(function (elem, index, array) {
		var buff = fs.readFileSync(counter.opt.inputDir+elem);
		counter.push(buff);
		i++;
	});
	this.push(null);
};

module.exports = Counter;
