import React from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Paginate from './Paginate';
import TodoInfoPopup from './TodoInfoPopup';

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            headerMessage: 'My Todo App',
            currentPage: 1,
            todosPerPage: 6,
            todos: [],
            clickedTodo: null,
        }
    }
    
    componentDidMount (){
        this.fetchData();
    }

    fetchData() {
        fetch('/api/todo')
            .then(r => r.json())
            .then(resp=>{
                console.log(resp)
                this.setState({
                    todos: resp.todos
                });
            })
            .catch(error=>{
                console.log('Error:', error);
            })
    }

    handleClick = (event) => {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }

      fetchTodo =(todoId) =>{
          this.setState({
              currentTodoId: todoId,
              headerMessage: this.state.todos[todoId].title
          })
      }

    checkTodoToFetch =(todoId) =>{
        if(this.state.currentTodoId){
            return <Todo {...this.state.todos[todoId]}/>
        }

        {currentTodos.map(todo=>
            <TodoPreview
                key ={todo.id}
                todo {...todo}

            />
        )}
    }
    
    render(){
        const { todos, currentPage, todosPerPage } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = this.state.todos.slice(indexOfFirstTodo, indexOfLastTodo);

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
                <button onClick={ () =>
                    fetch("/api/todo", {
                        method: "POST",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "userId": 4,
                            "id": 5,
                            "title": "fufdasfdagiat veniam minus",
                            "completed": false
                        })
                    }).then(() => console.log("add succeeded"))
                    .catch(err => console.log(err))
                    }
                > Add 
                </button>
                <button onClick={() => this.fetchData()}> Fetch new data 
                </button>
                    <TodoList 
                        currentTodos = {this.state.todos}
                        onClick={(todo) => {
                            this.setState({ clickedTodo: todo})
                        }}
                    />
                 <br/>
                <div className="paginate">
                    <Paginate 
                    renderPageNumbers={renderPageNumbers}
                    />
                </div>
                <TodoInfoPopup 
                    todo={this.state.clickedTodo} 
                    onCloseClick={() => {
                        this.setState({clickedTodo: null})
                    }}
                />
            </div>
        )
    }
}

export default App;