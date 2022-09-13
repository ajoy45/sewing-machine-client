import React from 'react';
import image from '../../images/banner.png'
const Baner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <div className='order-last sm:order-last md:order-last lg:order-first'>

                    <img src={image} className="max-w-lg" alt='sewing machine' />
                </div>
                <div className=''>
                    <h1 className="text-6xl font-bold text-secondary">High-Performance Machines Profitable Solutions</h1>
                    <p className="py-6 text-secondary">Custom Solutions to Suit Your Need</p>
                    <button className="btn btn-primary text-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Baner;