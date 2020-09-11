const express = require('express');
var crypto = require('crypto');
const router = express.Router();
var User = require('../models/UserModel');

var sess;

    router.get('/tampilLogin',function(req,res){
      sess=req.session;
      if(sess.email){
       
      }
      res.render('login');
    });

    router.post('/login/check', (req, res) => {
        User.findOne({email: req.body.email, password: req.body.password}, (err,user) =>{
           
                if(user){
                    console.log(user);
                    
                    req.session.id = user._id;
                    req.session.nama = user.nama;
                    req.session.email = user.email;
                    req.session.level = user.level;
                    if (user.level == 'admin'){
                        res.redirect('/dashAdmin');
                    } else {
                        res.redirect('/dashUser');
                    }
                }else{
                    res.render('500',{
                        message:'Email atau Password Salah'
                    });
                }
        })
    });
  
 router.get('/logout',(req,res) => {
      req.session.destroy((err) => {
          if(err) {
              return console.log(err);
          }
          res.redirect('/tampilLogin');
      });
  
  });

  module.exports = router;