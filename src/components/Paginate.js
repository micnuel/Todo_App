import React from 'react';

const Paginate = ({renderTodos, renderPageNumbers, navClick}) =>{
    return (
        <div>
           
            <ul id="page-numbers">

                {renderPageNumbers}

            </ul>
        </div>
    )
}

export default Paginate;