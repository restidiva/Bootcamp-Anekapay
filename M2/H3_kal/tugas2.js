const express = require('express')
const app = express()
const port = 5000

app.all('/server/tambah/:no1/:no2', function (req, res) {
    
    var no1 = parseInt(req.params.no1);
    var no2 = parseInt(req.params.no2);
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

app.get('/server/kurang/:no1/:no2', function (req, res) {

    var no1 = parseInt(req.params.no1);
    var no2 = parseInt(req.params.no2);
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

app.get('/server/kali/:no1/:no2', function (req, res) {

    var no1 = parseInt(req.params.no1);
    var no2 = parseInt(req.params.no2);
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

app.get('/server/bagi/:no1/:no2', function (req, res) {

    var no1 = parseInt(req.params.no1);
    var no2 = parseInt(req.params.no2);
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
            res.send('Pembagi Tidak Boleh 0!')
        }
    } else {
        res.send('Format Angka Anda Salah');
    }
});
app.listen(port, () => console.log(`Example app listening on port 3000!`))