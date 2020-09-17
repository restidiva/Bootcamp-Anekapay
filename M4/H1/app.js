var express = require('express');  
var app = express();  
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
const port = process.env.PORT || 2900;
var pegawai = require('./routes/pegawai');
var departemen = require('./routes/departemen');


mongoose.Promise = global.Promise;

//hubungkan ke Mongodb
mongoose.connect('mongodb://localhost/cobarest')  
  .then(() => console.log('Berhasil terhubung dengan MongoDB'))
  .catch((err) => console.error(err));

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

  app.use('/pegawai', pegawai);  
  app.use('/departemen', departemen); 

  app.listen(port,() => {
    console.log("server running on port" + port);
  });