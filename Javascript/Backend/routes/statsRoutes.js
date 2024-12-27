const express = require('express');
const router = express.Router();
const dataStore = require("../data/dataStore");

// Gráfica de barras: productos ordenados por precio
router.get('/products', (req, res) => {
  const sortedProducts = [...dataStore.products].sort((a, b) => b.precio_producto - a.precio_producto);
  res.status(200).json(sortedProducts);
});

// Gráfica de pastel: clientes menores y mayores de edad
router.get('/clients', (req, res) => {
  const stats = {
    menores: dataStore.clients.filter(client => client.edad < 18).length,
    mayores: dataStore.clients.filter(client => client.edad >= 18).length,
  };
  res.status(200).json(stats);
});

module.exports = router;
