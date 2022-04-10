import React from 'react';
import {connect} from "react-redux";
import { Navigate } from 'react-router-dom';

export const SecureRoute = ({ element: Component, authenticated }) => {    
    if (authenticated !== null && authenticated !== "" && authenticated !== undefined) {
        return (<Component/>)
    } else {
       return (<Navigate to="/login" replace />)
    }
    
};

const mapStateToProps = state => ({
    authenticated: state.user.get("user").get("id")
});

export default connect(mapStateToProps, null)(SecureRoute);