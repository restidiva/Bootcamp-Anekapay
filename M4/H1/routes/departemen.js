var express = require('express');  
var router = express.Router();  
var Departemen = require('../models/Departemen');

//fungsi GET
router.get('/', function(req, res, next){  
    Departemen.find(function(err, departemen){
        if(err) return next(err);
        res.json(departemen);
    });
});

//fungsi POST
router.post('/', function(req, res, next){  
    Departemen.create(req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

//fungsi get /departemen/id
router.get('/:id', function(req, res, next){  
    Departemen.findById(req.params.id, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

//fungsi PUT /departemen/id
router.put('/:id', function(req, res, next){  
    Departemen.findByIdAndUpdate(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

//fungsi DELETE /departemen/id
router.delete('/:id', function(req, res, next){  
    Departemen.findByIdAndRemove(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

module.exports = router;