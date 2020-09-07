const fs = require('fs');
function AsyncrounousReadFileContentMustUseCallback(filename, callback) {
        // First I want to read the file
        return fs.readFile(filename, function read(err, data) {
            if (err) {
                throw err;
            }
            const content = data;
            callback(content)

           
        });
        function processFile(content) {
            console.log(content);
        }
    }

    function writeFileContent(filename, contents, cb) { 
        fs.writeFile(filename, contents, function (err) {
            if (err) return console.log(err);

            cb()
        });
    }

    AsyncrounousReadFileContentMustUseCallback("coba.md", function (a) {
        AsyncrounousReadFileContentMustUseCallback("coba2.md", function (b) {
            AsyncrounousReadFileContentMustUseCallback("coba3.md", function (c) {

                writeFileContent('gabung.md', a + b + c, function () {
                    console.log("we are done");
                })
            })
        })
    })
