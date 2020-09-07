const fs = require('fs');
const data = fs.readFileSync('Asyncronus.js'); 
console.log(data);
function moreWork(){
	console.log("Success....");
}
moreWork();