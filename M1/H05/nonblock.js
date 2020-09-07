  
const fs = require('fs');
fs.readFile('Asyncronus.js', (err, data) => {
  if (err) throw err;
  console.log(data);
});

function moreWork(){
	console.log("Success....");
}
moreWork();