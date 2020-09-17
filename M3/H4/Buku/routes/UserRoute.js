  
var express = require('express');
var router = express.Router();
var Buku = require('../models/BukuModel');
var User = require('../models/UserModel');

// router.get('/homeuser', (req, res) => {
  
//   Buku.find(function(err, bukus) {

//     if (err) {
//       return res.render('500', {
//           message : "Gagal Menampilkan Data"
//       });
//     }
//     return res.render('indexUser', {
//       bukus: bukus,
//       user : req.session.nama
//     });
//   });
// });


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

router.get('/profil',(req,res)=>{
req.session;
if(req.session.level=='user'){
User.findById(req.session.idUser, (err, doc) => {
    res.render("userProfile", {
        nama: req.session.nama,
        email: req.session.email,
        username: req.session.username,
        password: req.session.password,
        level: req.session.level
   });

});
}else{
res.redirect('/login/logout');
}
})

module.exports = router;