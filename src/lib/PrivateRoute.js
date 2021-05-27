import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useMyContext } from '../context';

const PrivateRoute = ({ children, ...rest }) => {
    const { currentUser } = useMyContext();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                currentUser ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;