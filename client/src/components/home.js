import React from 'react';
import UserService from '../services/UserService';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to example page!</h1>
            <div>
                <button
                    onClick={() => UserService.doLogin()}
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default HomePage;