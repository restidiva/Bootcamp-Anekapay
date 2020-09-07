readFileContent("abjad.md", function (a){
    readFileContent("abjad2.md", function (b){
      readFileContent("abjad3.md", function (b){
          writeFileContent("gabung.md", a + b + c, function(){
              console.log("we are done");
          })
        })   
    })
  })