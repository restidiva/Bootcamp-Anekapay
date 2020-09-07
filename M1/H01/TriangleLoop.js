var s = '';
for ( var i = 1; i < 7; i++) {
    for( var x = 1; x < i; x++){
        s += '*';
    }
    s += '\n';
}

console.log(s);