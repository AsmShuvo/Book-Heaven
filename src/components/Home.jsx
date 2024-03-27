import React from 'react';
import Banner from './Banner';
import Books from './Books';
import ListHeader from './ListHeader';
import ReadList from './ReadList';
import Tabs from './Tabs';
const Home = () => {
    return (
        <div>
            <Tabs/>
            <Banner/>
            <Books/>
        </div>
    );
};

export default Home;