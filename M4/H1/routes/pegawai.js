var express = require('express');  
var router = express.Router();  
var Pegawai = require('../models/Pegawai');

//fungsi GET
router.get('/', function(req, res, next){  
    Pegawai.find(function(err, pegawai){
        if(err) return next(err);
        res.json(pegawai);
    });
});

//fungsi POST
router.post('/', function(req, res, next){  
    Pegawai.create(req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

//fungsi get /pegawai/id
router.get('/:id', function(req, res, next){  
    Pegawai.findById(req.params.id, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

//fungsi PUT /pegawai/id
router.put('/:id', function(req, res, next){  
    Pegawai.findByIdAndUpdate(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

//fungsi DELETE /pegawai/id
router.delete('/:id', function(req, res, next){  
    Pegawai.findByIdAndRemove(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

module.exports = router;