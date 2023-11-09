//open a file. If it does not exits it will create a one.
//But it delete the content in a file which is opened.

var fs = require('fs');

fs.open('mynewfile.txt','w',function(err,file){
    if (err) throw err;
        console.log('Saved!');
});