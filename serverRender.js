// server side render with react
import ReactDomServer from 'react-dom/server';
import React from 'react';
import axios from 'axios';
import config from './config';
import App from './src/components/App';

const serverRender =() =>
axios.get(`${config.serverUrl}/api/todo`)
  .then(resp =>{
      return {
          markUp: ReactDomServer.renderToString(
          <App intialTodo ={resp.data.todos} />),
          intialData: resp.data
      };
  })
  .catch(error=>{
      console.log('Error:', error);
  })


export default serverRender;





//What's wrong with this??

// const serverRender=() =>{
// axios.get(`${config.serverUrl}/api/todo`)
//   .then(resp =>{
//       return {
//           markUp: ReactDomServer.renderToString(
//           <App intialTodo ={resp.data.todos} />),
//           intialData: resp.data
//       };
//   })
//   .catch(error=>{
//       console.log('Error:', error);
//   })}