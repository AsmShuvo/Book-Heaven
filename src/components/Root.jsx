import React from 'react';
import Nav from './Nav';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
            
        </div>
    );
};

export default Root;