const express = require('express');
const router = express.Router();


//index
router.get('/', (req, res) => {
  let selectProduct = products;

  res.json(posts);
});

//show
router.get('/:id', (req, res) => {
  res.send(`Singolo prodotto ${req.params.id}`);
});

//store
router.post('/', (req, res) => {
  res.send('Aggiungi un nuovo prodotto');
});

//update
router.put('/:id', (req, res) => {
  res.send(`Aggiorna il prodotto ${req.params.id}`);
});

//modify
router.patch('/:id', (req, res) => {
  res.send(`Modifica il prodotto ${req.params.id}`);
});

//destroy
router.delete('/:id', (req, res) => {
  res.send(`Cancella un prodotto ${req.params.id}`);
});

module.exports = router;