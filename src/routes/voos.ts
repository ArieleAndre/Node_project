import express from "express";
const router = express.Router();

router.get('/:from/:to', (req, res) => {
    console.log('params', req.params)
    console.log('query', req.query)
    console.log('body', req.body)
    
    const {from, to} = req.params;
    res.json({flights: {
        from:from.toLocaleUpperCase(),
        to:to.toUpperCase(),
        price:'12345'

        }
    });
});

export default router;