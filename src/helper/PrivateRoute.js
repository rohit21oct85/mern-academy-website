import React,{useContext} from 'react';
import { Route, Redirect } from "react-router-dom"
import {AuthContext} from 'context/AuthContext';

export default PrivateRoute = ({ component: Component, ...rest }) => {
    const {state} = useContext(AuthContext);
    return (
        <Route 
            {...rest} 
            render={props => 
            (
                state.isLoggedIn === 'true' ? <Component {...props} /> : <Redirect to={{ pathname: '/login' }} />
            )} 
      />
    )
}