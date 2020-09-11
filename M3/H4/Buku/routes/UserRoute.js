var express = require('express');
var router = express.Router();
var Buku = require('../models/BukuModel');


router.get('/dashUser', (req, res) => {
  if(req.session.level == 'user'){

    Buku.find(function(err, bukus) {
  
      if (err) {
        return res.render('500', {
            message : "Gagal Menampilkan Data"
        });
      }
      return res.render('indexUser', {
        bukus: bukus,
        user : req.session.nama
      });
    });
  }
});


module.exports = router;