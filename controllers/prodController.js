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

//modify

//delete