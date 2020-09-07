function countBs(string) {
    var result = 0;

    for (var i = 0; i < string.length; i++){
    if (string[i] === 'B'){
         result = result + 1;
       }
    }
    
        return result;   
}

function countChar(string, character){
    var result = 0;

    for (var i = 0; i < string.length; i++){
    if (string[i] === character){
         result = result + 1;
       }
    }
    
        return result;   
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "a"));
// → 4