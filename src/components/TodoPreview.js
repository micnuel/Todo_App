import React from 'react';

class TodoPreview extends React.Component{
    handleClick =() =>{
        console.log(this.props.title);
    }
    render(){
       return(

            <div className ="link" onClick={() => this.props.onClick()}>
            <div className="todo-title"> 
                <p>                   
                    {this.props.title}  
                </p>
            </div>
            </div>

    )
    }
}




export default TodoPreview;