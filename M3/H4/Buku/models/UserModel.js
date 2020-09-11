(function() {
    'use strict';
  
    var user,
      mongoose = require('mongoose'),
      Schema = mongoose.Schema;
  
    user = new Schema({
      idUser: {
        type: 'String',
        required: true
      },
      nama: {
        type: 'String',
        required: true
      },
      email: {
        type: 'String'
      },
      username: {
        type: 'String',
        required: true
      },
      password: {
          type : 'String',
          required: true
      }, 
      level: {
        type: String
    }
    });
  
    module.exports = mongoose.model('User', user);
  
  }).call(this);