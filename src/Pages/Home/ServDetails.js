import React from 'react';

const ServDetails = ({serve}) => {
    const{img,work,description}=serve;
    return (
        <div className='text-center '>
            <img  className='w-50 mx-auto' src={img} alt="" />
            <h1 className='text-secondary text-3xl font-bold'>{work}</h1>
            <p className='text-secondary text-2xl'>{description}</p>
        </div>
    );
};

export default ServDetails;