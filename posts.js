const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`Lista dei prodotti`);
});

router.get('/:id', (req, res) => {
  res.send(`Singolo prodotto ${req.params.id}`);
});

router.post('/', (req, res) => {
  res.send('Aggiungi un nuovo prodotto');
});

router.put('/:id', (req, res) => {
  res.send(`Aggiorna il prodotto ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  res.send(`Cancella un prodotto ${req.params.id}`);
});

module.exports = router;