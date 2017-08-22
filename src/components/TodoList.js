import React from 'react';
import TodoPreview from './TodoPreview'

const TodoList =(props) =>(
        <div className = "todo-list">
            {props.currentTodos.map(todo=>
                <TodoPreview
                    key ={todo.id}
                    todo {...todo}
                />
            )}
        </div>
)

export default TodoList;