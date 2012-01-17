var fs = require('fs');

fs.readFile('./src/test.js', 'utf8', function (err, data) {
	var pkg = data.replace(/[\r\n\t]/g, '').match(/\/\*pkg(.*)\*\//);
	console.log(data);
	console.log('pkg:\n' + pkg);
});