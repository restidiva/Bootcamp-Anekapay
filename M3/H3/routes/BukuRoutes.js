(function() {
    'use strict';
  
    var express = require('express'),
      Buku = require('../models/Buku'),
      csrf = require('csurf'),
      router = express.Router(),
      csrfProtection = csrf({
        cookie: true
      }),
      uuid = require('node-uuid');
  
    router.get('/', function(req, res) {
      return Buku.find(function(err, bukus) {
  
        if (err) {
          return res.render('500', {
              message : "Gagal Menampilkan Data"
          });
        }
        return res.render('index', {
          bukus: bukus
        });
  
      });
    });
  
    router.get('/tambah/buku', csrfProtection, function(req, res) {
      return res.render('tambah', {
        csrfToken: req.csrfToken()
      });
    });
  
    router.post('/save/buku', csrfProtection, function(req, res) {
      var buku = new Buku({
        idBuku: uuid.v4(),
        judul: req.body.judul,
        pengarang: req.body.pengarang,
        penerbit: req.body.penerbit,
        tahunTerbit: req.body.tahunTerbit,
        halaman: req.body.halaman
      });
  
      return buku.save(function(err, buku) {
        if (err) {
            return res.render('500', {
                message : "Gagal Menambahkan Data"
            });
        }
        return res.redirect('/');
      });
  
    });
  
    router.get('/edit/buku/:idBuku', csrfProtection, function(req, res) {
    
      var idBuku = req.params.idBuku;
  
      Buku.findOne({
        idBuku: idBuku
      }, function(err, buku) {
        if (err) {
            return res.render('500', {
                message : "Data Tidak Ditemukan"
            });
        }
        return res.render('edit', {
          buku: buku,
          csrfToken: req.csrfToken()
        });
      });
    });
  
    router.post('/update/buku/:idBuku', csrfProtection, function(req, res) {
  
      var idBuku = req.params.idBuku;
  
      Buku.findOne({
        idBuku: idBuku
      }, function(err, buku) {
  
        if (err) {
            return res.render('500', {
                message : "Gagal Mengubah Data Buku"
            });
        }
  
        buku.judul = req.body.judul;
        buku.pengarang = req.body.pengarang;
        buku.penerbit = req.body.penerbit;
        buku.tahunTerbit = req.body.tahunTerbit;
        buku.halaman = req.body.halaman;
        buku.save();
  
        res.redirect('/');
      });
    });
  
    router.get('/delete/buku/:idBuku', function(req, res) {
      Buku.remove({
        idBuku: req.params.idBuku
      }, function(err) {
        if (err) {
            return res.render('500', {
                message : "Data Tidak Ditemukan"
            });
        }
        res.redirect('/');
      });
    });
  
    module.exports = router;
  
  }).call(this);