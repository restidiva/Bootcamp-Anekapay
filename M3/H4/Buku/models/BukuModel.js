(function() {
    'use strict';
  
    var buku,
      mongoose = require('mongoose'),
      Schema = mongoose.Schema;
  
    buku = new Schema({
      idBuku: {
        type: 'String',
        required: true
      },
      judul: {
        type: 'String',
        required: true
      },
      pengarang: {
        type: 'String'
      },
      penerbit: {
        type: 'String',
        required: true
      },
      tahunTerbit: {
          type : 'Number',
          required: true
      },
      halaman: {
          type: 'Number',
          required: true
      },
      harga: {
        type: 'Number',
        required: true
      },
      stok: {
          type: 'Number',
          required: true
      }
    });
  
    module.exports = mongoose.model('Buku', buku);
  
  }).call(this);