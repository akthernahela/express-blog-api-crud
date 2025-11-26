const products = require('./data/posts');
const express = require('express');

//index
const index = (req, res) => {
    /*let selectProduct = products;
    if (req.query.tags) {
        selectProduct = products.filter(
            product => product.tags.includes(req.query.tags)
        );
    }*/

    res.json(products);
}

//show
const show = (req, res) => {
    const singleProd = products.find(product => product.req.params.id === req.params.id);
    res.json(singleProd);
}

//store
const store = (req, res) => {
    res.send('Aggiungi un nuovo prodotto');
}

//update
const put = (req, res) => {
    res.send(`Aggiorna il prodotto ${req.params.id}`);
}

//modify
const patch = (req, res) => {
    res.send(`Modifica il prodotto ${req.params.id}`);
}

//destroy
const destroy = (req, res) => {
    const searchProd = products.find(product => product.req.params.id === req.params.id)
    console.log(searchProd);

    if (!searchProd) {
        return res.status(404).json({
            error: "Product not found!"
        })
    }

    //res.send(`Cancella un prodotto ${req.params.id}`);
}

module.exports = { index, show, store, put, patch, destroy }