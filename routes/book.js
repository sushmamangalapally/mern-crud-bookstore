var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('../models/Book.js');

//GET home page -> ALL BOOKS
router.get('/', function(req,res,next){
    // res.send('Express REST API');
    Book.find(function(err, products){
        if(err) return next(err);
        res.json(products);
    })
});

//GET SINGLE BOOK BY ID
router.get('/:id', function(req, res, next){
    Book.findById(req.params.id, function(err,post){
        if(err) return next(err);
        res.json(post);
    })
});

//UPDATE BOOK
router.put('/:id', function(req, res, next){
    Book.findByIdAndUpdate(req.params.id, req.body, function(err,post){
        if(err) return next(err);
        res.json(post);
    })
});

//DELETE BOOK
router.delete(':/id', function(req,res,next){
    Book.findByIdAndRemove(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    })
})

module.exports = router;