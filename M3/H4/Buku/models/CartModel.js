var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cart = new Schema({
  idCart:{
    type:Number,
    unique:true
  },
  pembeli: {
    type: String
  },
  total: {
    type: Number
  },
  tanggal: {
    type: Date
  }
});

module.exports = mongoose.model('cart', cart);