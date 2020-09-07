const express = require('express')
const app = express()

app.get('/', function (req,res) {
    res.render('Home')
})
app.get('/Penjumlahan', (req,res)=>{
    res.render('Penjumlahan')
})
app.get('/Pengurangan', (req,res)=>{
    res.render('Pengurangan')
})
app.get('/Perkalian', (req,res)=>{
    res.render('Perkalian')
})
app.get('/Pembagian', (req,res)=>{
    res.render('Pembagian')
})

app.post('/Penjumlahan', function (req, res) {
    
    var no1 = parseInt(req.body.no1);
    var no2 = parseInt(req.body.no2);
    var check = 0;
    if (isNaN(no1)) {
        console.log('Harus Diisi Angka');
        check = 1;
    }
    if (isNaN(no2)) {
        console.log('Harus Diisi Angka');
        check = 1;
    }
    // console.log(check);
    if (check == 0) {
        var hasil = no1 + no2;
        // return res.send(hasil);
        return res.send('hasil : '+ hasil);
        // console.log(hasil);
    } else {
        res.send('Format Angka Anda Salah');
    }
});

app.post('/Pengurangan', function (req, res) {

    var no1 = parseInt(req.body.no1);
    var no2 = parseInt(req.body.no2);
    var check = 0;
    if (isNaN(no1)) {
        console.log('Harus Diisi Angka');
        check = 1;
    }
    if (isNaN(no2)) {
        console.log('Harus Diisi Angka');
        check = 1;
    }
    if (check == 0) {
        var result = no1 - no2;
        res.send('Hasilnya : ' + result);
    } else {
        res.send('Format Angka Anda Salah');
    }
});

app.post('/Perkalian', function (req, res) {

    var no1 = parseInt(req.body.no1);
    var no2 = parseInt(req.body.no2);
    var check = 0;
    if (isNaN(no1)) {
        console.log('Harus Diisi Angka');
        check = 1;
    }
    if (isNaN(no2)) {
        console.log('Harus Diisi Angka');
        check = 1;
    }
    if (check == 0) {
        var result = no1 * no2;
        res.send('Hasilnya: ' + result);
    } else {
        res.send('Format Angka Anda Salah');
    }
});

app.post('/Pembagian', function (req, res) {

    var no1 = parseInt(req.body.no1);
    var no2 = parseInt(req.body.no2);
    var check = 0;
    if (isNaN(no1)) {
        console.log('Harus Diisi Angka');
        check = 1;
    }
    if (isNaN(no2)) {
        console.log('Harus Diisi Angka');
        check = 1;
    }
    if (check == 0) {
        if (no2 != 0) {
            var result = no1 / no2;
            res.send('Hasilnya: ' + result);
        } else {
            res.send('Pembagi TIdak Boleh 0!')
        }
    } else {
        res.send('Format Angka Anda Salah');
    }
});

module.exports = app;