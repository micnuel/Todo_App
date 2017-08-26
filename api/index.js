import data from '../src/testData';
import express from 'express';

// const todos = data.reduce((obj,todo)=>{
//     obj[todo.id]= todo
//     return obj
// },{})

const router = express.Router();

let fakeDatabase = [
    data[1],
    data[2],
    data[3]
];

router.get('/todo', (req, res)=>{
    res.send({ todos:fakeDatabase });
});

router.post('/todo', (req, res) => {
    console.log(req.body);
    fakeDatabase.push(req.body);
    res.status(200).send();
});


export default router;