import React, { useEffect, useState, useCallback } from 'react';
import { useRouteMatch, useParams, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Todo from './Todo';
import {Link} from 'react-router-dom';

const TodoList = () => {

    let match = useRouteMatch(); // pros globales
    let { id } = useParams(); // coger params
    let history = useHistory(); // navegar
    const [todos, setTodos] = useState([])

    const removeTodo = (text) => {
        setTodos(todos.filter((todo) => todo.id != text.id));
    }
    const _renderTodos = useCallback(() => {
        return todos.map((todo) => <Todo removeTodo={removeTodo} key={todo.id} todo={todo} />)
    }, [todos]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => setTodos(json))
            .catch((e) => console.log("error", e));
    }, [])

    return(
        <div className="container">
            <Link to = "/todos/create">Añadir todo</Link>
            {_renderTodos()}
        </div>
    )

}

export default React.memo(TodoList);