import express from 'express';
import config from './config';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import apiRouter from './api';
import serverRender from './serverRender';
const server = express();
server.use(sassMiddleware({
    src:path.join(__dirname, 'sass'),
    dest:path.join(__dirname, 'public')
}))
server.set('view engine', 'ejs');

server.use(express.static('public'));
server.use('/api', apiRouter);

serverRender()
 .then(( {markUp, intialData} )=>{
    server.get('/', (req, res) =>{
    res.render('index', {
        markUp,
        intialData
    })
}) 
 })
 .catch(error=>{
     console.log('Error', error);
 })

server.listen(config.port,config.host, ()=>{
    console.info('Listening to port: ', config.port);
})