var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pegawai = new Schema({  
    nama: {
        type: 'String',
        required: true
    },
    usia: {
        type: 'Number',
        required: true
    },
    jabatan: {
        type: 'String',
        required: true
    }
});

module.exports = mongoose.model('pegawai', pegawai);  
