import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const isAuthenticated = () => {
    return localStorage.getItem('authToken') !== null;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/Login', state: { from: props.location } }} />
                )
            }
        />
    );
};

export default ProtectedRoute;
