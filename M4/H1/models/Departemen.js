var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var departemen = new Schema({  
    nama: {
        type: 'String',
        required: true
    },
    ketua: {
        type: 'String',
        required: true
    },
    anggota: {
        type: 'Number',
        required: true
    }
});

module.exports = mongoose.model('departemen', departemen);  
