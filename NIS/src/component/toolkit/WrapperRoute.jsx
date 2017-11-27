import React from 'react';
import {Route} from 'react-router-dom';


export default function WrapperRoute({component: Component, path: path, exact: exact, ...rest}) {
    exact = exact? true: false;
    return (
        <Route exact={exact} path={path} render={(props) => <Component {...rest} {...props}/>} />
    );
};