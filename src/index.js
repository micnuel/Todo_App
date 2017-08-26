// import React from 'react';
// import ReactDom from 'react-dom';
import App from './components/App';
// import axios from 'axios';


import React from 'react';
import ReactDom from 'react-dom';

//using axios to fetch todo

// axios.get('/api/todo')
//     .then(resp=>{
//        ReactDom.render(
//     <App intialTodo = {resp.data.todos}
//      />,
//     document.getElementById('root')
//     ) 
// })

// passing the todo from server to ejs to react
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';

// const Routing = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/topics">Topics</Link></li>
//       </ul>

//       <hr/>

//       <Route exact path="/" component={Home}/>
//       <Route path="/about" component={About}/>
//       <Route path="/topics" component={Topics}/>
//     </div>
//   </Router>
// )

// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// )

// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// )

// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           Rendering with React
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>
//           Components
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </Link>
//       </li>
//     </ul>
// <Route exact path={match.url} render={() => (
//       <h3>Please select a topic.</h3>
//     )}/>
//     <Route path={`${match.url}/:topicId`} component={Topic}/>
    
//   </div>
// )

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// )

//export default Routing;
// ReactDom.render(
//     <div>
//       <App intialTodo = {window.intialData.todos} /> 
//     </div>,
//     document.getElementById('root')
// )


if(typeof window !== 'undefined') {
  
ReactDom.render(
  <App/>,
document.getElementById('root')
)
}