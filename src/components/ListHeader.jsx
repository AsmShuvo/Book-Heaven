import React from 'react';

const ListHeader = ({text="ENLISTED BOOKS HERE"}) => {
    return (
        <div>
            <h1 className='bg-gray-100 mx-2 md:mx-20  my-2 md:my-10 rounded-lg p-2 md:p-10 text-center font-extrabold md:text-3xl'>{text}</h1>
        </div>
    );
};

export default ListHeader;