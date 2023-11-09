var fs = require('fs');
var rs = fs.createReadStream('./renamed_file.txt');

rs.on('open',function(){
    console.log('The file is opened!')
});