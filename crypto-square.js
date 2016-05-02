// object orianted programing
// create our Crypto class
// it takes a string as an argument
var Crypto = function(text) {
	this.text = text;
	// this.normalizePlaintext = fuction() {
	// return this.text.replace(/[\W]/g, "").toLowerCase();
	// };
};

Crypto.prototype.normalizePlaintext = function() {
	return this.text.replace(/[\W]/g, "").toLowerCase();
};
Crypto.prototype.size = function() {
	var length = this.normalizePlaintext().length;
	return Math.ceil(Math.sqrt(length));
};
Crypto.prototype.plaintextSegments = function() {
	var segments = [],
		npt = this.normalizePlaintext(),
		size = this.size();

	for (var i = 0; i < npt.length; i += size) {
		//add a sting of segments of characters to our array of segments
		segments.push(npt.substr(i,size))
	};
	//return an array of string that represent
	//our plain text segments
	return segments;
};

Crypto.prototype.ciphertext = function() {
	var code = "",
		size = this.size(),
		segs = this.plaintextSegments();
	

	//loop through the columns
	for (var i = 0; i < size; i +=1) {
		//loop through the rows
		for (var j = 0; j < segs.length; j+=1) 
			code += segs[j].charAt(i);
	}
	//return a string representing the coded message
	return code;
};
module.exports = Crypto;