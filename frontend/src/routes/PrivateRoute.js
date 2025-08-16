import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
    const { user, loading } = useAuth();

    return (
        <Route
            {...rest}
            render={(props) =>
                !loading && !user ? (
                    <Redirect to="/login" />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};

export default PrivateRoute;