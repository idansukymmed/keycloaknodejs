import React from 'react';
import {
    useLocation,
    Navigate
} from 'react-router-dom';
import UserService from "../services/UserService";

const Authenticated = ({ element }) => {
    let location = useLocation();

    if(!UserService.isLoggedIn()) {
        return <Navigate to='/' state={{ from: location }} />
    }
    return element
}

export default Authenticated;