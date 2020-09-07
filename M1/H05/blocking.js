const fs = require('fs');
const data = fs.readFileSync('Asyncronus.js'); // blocks here until file is read
console.log(data);
function moreWork(){
	console.log("Success....");
}
moreWork();