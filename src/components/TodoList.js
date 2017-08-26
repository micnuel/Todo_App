import React from 'react';
import TodoPreview from './TodoPreview';
import styled from 'styled-components';

const TodoListWrapper = styled.div`
    flex: 1;
    overflow: scroll;
    max-height: 80vh;
`;

const TodoList =(props) =>(
        <TodoListWrapper>
            {props.currentTodos.map(todo=>
                <TodoPreview
                    key ={todo.id}
                    todo {...todo}
                    onClick={() => props.onClick(todo)}
                />
            )}
        </TodoListWrapper>
)

export default TodoList;