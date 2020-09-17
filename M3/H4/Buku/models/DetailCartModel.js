var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var detailcart = new Schema({
    idCart: {
        type: Number
    },
    namaBuku: {
        type: String
    },
    harga:{
        type:Number
    },
    jumlah:{
        type:Number
    },
    subtotal:{
        type:Number
    }
});

module.exports = mongoose.model('detailcart', detailcart);