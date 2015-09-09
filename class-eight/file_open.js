var fs = require('fs');

fs.open('./my_file.txt', 'r', function opened(err, fd, callback){
	if(err) callback(err);
  function notifyError(err){
		fs.close(fd, function(){
			callback(err);
		});
	}
	var readBuffer = new Buffer (1024),
		bufferOffset = 0,
		bufferLength = readBuffer.length,
		filePosition = 100;
	fs.read(fd,
					readBuffer,
					bufferOffset,
					bufferLength,
					filePosition,
					function read(err, readBytes){
						if(err) notifyError(err);
						console.log('arquivo lido ' + readBytes + ' bytes');
						if(readBytes > 0){
							console.log(readBuffer.slice(0, readBytes));
						  console.log(readBuffer.toString());
						}
					});
});
