import React from 'react';

export default ({todo, removeTodo}) => {

    return (
        <div style={{display:"flex"}}>
            <p>{todo.title}</p>
            <button onClick={() => removeTodo(todo)}>X</button>
        </div>
    )
}