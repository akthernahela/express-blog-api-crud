const products = require('./data/posts');

//index
const index = (req, res) => {
    let selectProduct = products;

    res.json(posts);
}

//show
const show = (req, res) => {
    res.send(`Singolo prodotto ${req.params.id}`);
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
    res.send(`Cancella un prodotto ${req.params.id}`);
}

module.exports = { index, show, store, put, patch, destroy }