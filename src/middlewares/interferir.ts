import {RequestHandler} from 'express';

const interferir: RequestHandler = (req, res, next) => {
    console.log('EXECUTOU');

    next();
}

export default interferir;
