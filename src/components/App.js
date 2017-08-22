import React from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Paginate from './Paginate';

class App extends React.Component{
    state={
        headerMessage: 'My Todo App',
        todos: this.props.intialTodo,
        currentPage: 1,
        todosPerPage: 6,
 }
    componentDidMount (){
        // axios.get('/api/todo')
        //  .then(resp=>{
        //      this.setState({
        //          todos: resp.data.todos
        //      });
        //  })
        // .catch(error=>{
        //     console.log('Error:', error);
        // })
    }
    handleClick = (event) => {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }

    //   fetchTodo =(todoId) =>{
    //       this.setState({
    //           currentTodoId = todoId,
    //           headerMessage:this.state.todos[todoId].title
    //       })
    //   }

    // checkTodoToFetch =(todoId) =>{
    //     if(this.state.currentTodoId){
    //         return <Todo {...this.state.todos[todoId]}/>
    //     }

    //     {currentTodos.map(todo=>
    //         <TodoPreview
    //             key ={todo.id}
    //             todo {...todo}

    //         />
    //     )}
    // }
    
    render(){
        const { todos, currentPage, todosPerPage } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

        // const renderTodos = currentTodos.map((todo, index) => {
        //   return <li key={index}>{todo}</li>;
        // });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
          return (
            <li
              key={number}
              id={number}
              onClick={this.handleClick}
            >
              {number}
            </li>
          );
        });
 
        return(
            <div className="app text-center">
                <div className="header">
                    <Header header={this.state.headerMessage} />
                </div>
                    <TodoList 
                     currentTodos = {currentTodos}
                    />
                 <br/>
                <div className="paginate">
                    <Paginate 
                    renderPageNumbers={renderPageNumbers}
                    />
                </div>

            </div>
        )
    }
}

export default App;