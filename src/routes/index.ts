import express, { RequestHandler } from 'express';
import produtosRouter from './produtos';
import voosRouter from './voos'
import interferir from '../middlewares/interferir';



const router = express.Router();


router.use(interferir)
router.use('/produtos', produtosRouter);
router.use('/voos', voosRouter)


router.get('/ping', interferir, (req, res) => {
    console.log('RODOU')
    res.json({ pong: true});
});

router.get('/', (req, res) => {
    let name = "ariele";
    let age = 25
    res.json({name, age}) 
})


export default router;