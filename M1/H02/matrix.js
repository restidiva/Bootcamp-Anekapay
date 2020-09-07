var hitung= function () {
	var a = 
	[
		[ 5, 3],
		[ 4, 8]
	];
	var b = 
	[
		[ 2, 3],
		[ 7, 4]
	];	
	console.log( "Matrix A:" );
	console.table( a );	
	
	console.log( "Matrix B:" );
	console.table( b );
	console.log("");
	
	console.log( "Jumlah Matrix A + Matrix B:" );
	var Res = jum( a, b );
	console.table( Res );
}
function jum( a, b ) {
	var result = [];
	result = new Array( a.length );
	for ( var i = 0; i < result.length; i++ ) {
		
		result[ i ] = new Array( a[ i ].length );
		for ( var j = 0; j < result[ i ].length; j++ ) {
			
			result[ i ][ j ] = a[ i ][ j ] + b[ i ][ j ];
		}
	}
	return result;
}

hitung();