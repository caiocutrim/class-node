var uft8string = 'my little string';

var buffer = new Buffer(uft8string);

var base64String = buffer.toString('base64');

console.log(base64String);
