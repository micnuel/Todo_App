import React from 'react';


class Todo extends React.Component{
    render(){
        return(
            <div>
                <h2> {this.props.id} </h2>
            </div>
        )
    }
}

export default Todo;