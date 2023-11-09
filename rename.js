var fs = require('fs');

fs.rename('mynewfile.txt','renamed_file.txt',function(err){
    if (err) throw err;
        console.log("Renamed!");
});