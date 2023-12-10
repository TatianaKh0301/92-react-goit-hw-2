import React from 'react';

const TodoList = ({todos}) => {
    return(
        <ul>
            {todos.map(({id, text}) => (<li key={id}><p>{text}</p></li>))}
        </ul>
    );
}

export default TodoList;