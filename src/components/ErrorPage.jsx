import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center my-20'>
            <h1 className='text-7xl font-bold text-red-600'>404 Page Not Found :( </h1>
        <div className='flex justify-center items-start'>
            
            <Link to="/"><p className='my-10 btn btn-success'>GO TO HOME</p></Link>
        </div>
        </div>
    );
};

export default ErrorPage;