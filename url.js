var url = require('url');
var adr = "localhost:8080/default.htm?year=2017&month=july";

var q = url.parse(adr,true);

console.log(q);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);
console.log(q.query);
console.log(qdata.month);   //????????????????????
