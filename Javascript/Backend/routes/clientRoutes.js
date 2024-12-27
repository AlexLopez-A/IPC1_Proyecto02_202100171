const express = require('express');
const router = express.Router();
const dataStore = require('../data/dataStore');


//crear cliente
router.post('/', (req,res)=>{
    const { id_cliente, nombre_cliente,apellido_cliente, nit_cliente, edad } = req.body;

    if (dataStore.clients.some(c => c.id_cliente === id_cliente)) {
        return res.status(400).json({ message: 'Client already exists' });
      }
    
      const newClient = { ...req.body, nit: nit_cliente || 'C/F' };
      dataStore.clients.push(newClient);
      res.status(201).json({ message: 'Client added successfully', clients: dataStore.clients });
});

// listar clientes
router.get('/', (req,res)=>{
    res.status(200).json(dataStore.clients)
})

// eliminar cliente
router.delete('/:id', (req,res) => {
    const {id} = req.params;
    dataStore.clients = dataStore.clients.filter(c => c.id_cliente !== id);
    res.status(200).json({message: 'Client deleted successfully', clients: dataStore.clients})
})

module.exports = router;
