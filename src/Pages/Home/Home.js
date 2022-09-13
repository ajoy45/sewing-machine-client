import React from 'react';
import Baner from './Baner';
import Production from './Production';
import Review from './Review';
import Serve from './Serve';
import Discount from '../../Pages/Home/Discount'
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
const Home = () => {
    return (
        <div>
            <Baner></Baner>
            <Serve></Serve>
            <Production></Production>
            <Discount></Discount>
            <Review></Review>
            <Blog></Blog>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;