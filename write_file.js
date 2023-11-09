// it will write the text on a file.
// it delete the previous content of the file.

var fs = require('fs');

fs.writeFile('mynewfile.txt','Hello, text!',function(err){
    if (err) throw err;
        console.log('Saved!');
});