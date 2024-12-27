const express = require('express');
const router = express.Router();
const dataStore = require('../data/dataStore');

//crear producto
router.post('/', (req,res)=>{
    const { id_producto, nombre_producto, precio_producto, stock_producto } = req.body;

    if(dataStore.products.some(p => p.id_producto === id_producto || p.nombre_producto === nombre_producto)){
        return res.status(400).json({message: 'Product already exists'})
    }
    if(precio_producto <=0 || stock_producto <0 ){
        return res.status(400).json({message: 'Invalid product data'})
    }
    dataStore.products.push(req.body)
    res.status(201).json({message: 'Product added successfully', products: dataStore.products})
})

// listar productos
router.get('/', (req,res)=>{
    res.status(200).json(dataStore.products)
})

// eliminar producto 
router.delete('/:id', (req,res) => {
    const {id} = req.params;
    dataStore.products = dataStore.products.filter(p => p.id_producto !== id);
    res.status(200).json({message: 'Product deleted successfully', products: dataStore.products})
})

module.exports = router;
