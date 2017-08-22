import data from '../src/testData';
import express from 'express';

// const todos = data.reduce((obj,todo)=>{
//     obj[todo.id]= todo
//     return obj
// },{})

const router = express.Router();
router.get('/todo', (req, res)=>{
    res.send({ todos:data });
})


export default router;