var fs = require('fs');
fs.open('./my_file.txt', 'a', function opened(err, fd){
	if(err) throw err;
	var writeBuffer = new Buffer('Olaaah cara de chibaaataaaaaaa, siimm senhores'),
		bufferPosition = 0,
		bufferLength = writeBuffer.length, filePosition = null;
	fs.write(fd,
					 writeBuffer,
					 bufferPosition,
					 bufferLength,
					 filePosition,
					 function wrote(err, written){
						 if(err) throw err;
						 console.log('wrote ' + written + ' bytes');
					 });
});
