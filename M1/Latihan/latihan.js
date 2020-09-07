var penumpang = ['Resti', undefined, 'Tanata'];
var tambahPenumpang = function(namaPenumpang, penumpang){
    if (penumpang.length == 0 ){

        penumpang.push(namaPenumpang);

        return penumpang;
        
    }else{
        for( var i = 0; i < penumpang.lenth; i++ ){

            if( penumpang[i] == undefined) {

                penumpang[i] == namaPenumpang;

                return penumpang;
            }
        }
    }
}