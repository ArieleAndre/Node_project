import express from "express";
import {getProducts} from '../teste'

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ produtos: getProducts()});
});

router.post('/', (req, res) => {
    console.log('params', req.params)
    console.log('query', req.query)
    console.log('body', req.body)

    res.json({produtos: [] });
});

router.get('/:id', (req, res) => {
    const {id} = req.params;

    res.json({
        id, 
        name:'teclado xd', 
        price:'123'
    });
});

export default router;