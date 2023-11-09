// it will append the content to a previous file.
// if it does not exists the it will crate a new file.

var fs = require('fs');

fs.appendFile('mynewfile.txt','Hello content!',function(err){
    if (err) throw err;
        console.log("saved!");
});