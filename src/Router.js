import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

import {
    TodoList,
    TodoForm
} from './containers';

const Router = (props) => {

    return(
        <BrowserRouter>
            <Switch>
                
                {/* <Route exact path="/">
                    <TodoList />
                </Route> */}
                <Route exact path="/">
                    <TodoList></TodoList>
                </Route>

                <Route exact path="/todos/create">
                    <TodoForm />
                </Route>

                <Route exact path="/todos/:id">
                    <TodoList />
                </Route>

                <Route path="*">
                    <h1>404</h1>
                </Route>

            </Switch>
        </BrowserRouter>
    )

}

export default Router;