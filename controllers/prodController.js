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
    //console.log(req.body);
    const newId = products[products.lenght - 1].id + 1;
    const newProd = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }
    products.push(newProd);
    console.log(products);

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
    const prodId = Number(req.params.id)
    const searchProd = products.find(product => product.id === prodId)
    //console.log(searchProd);

    if (!searchProd) {
        return res.status(404).json({
            error: "Product not found!"
        })
    }

    products.splice(products.indexOf(searchProd), 1)
    console.log(products);

    res.sendStatus(204)

    //res.send(`Cancella un prodotto ${req.params.id}`);
}

module.exports = { index, show, store, put, patch, destroy }