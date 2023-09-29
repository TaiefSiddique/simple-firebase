import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';

const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
        </div>
    );
};

export default Header;