import React from 'react';
import image from '../../images/sewing.png'
import ServDetails from './ServDetails';
import img1 from '../../images/1.png';
import img2 from '../../images/2.png';
import img3 from '../../images/3.png';
const Serve = () => {
    const serves=[
        {
            work:"Woodworking",
            description:'Whether you’re managing around-the-clock production or working on a project...',
            img:img1

        },
        {
            work:"Metalworking",
            description:'From our versatile ironworkers to our easily-programmable plasma tables...',
            img:img2
        },
        {
            work:"Stone Cutting",
            description:'We build machines that set the industry standard for precision and durability...',
            img:img3

        }
        
    ]
    return (
      <section >
        <div className='text-center sm:text-center py-5'>
            <h1 className='text-primary font-bold text-4xl py-5'>Industries We Serve</h1>
            <p className='text-secondary text-3xl'>Manufacturer’s high end manufacturing services are a <br></br> perfect complement to today’s high tech industries.</p>
        </div>
        <div className='grid grid-cols-1 justify-center items-center lg:grid-cols-4 md:grid-cols-2'>
            <img className='w-50 mx-auto'  width={349} src={image} alt="" />
            
            {
                serves.map((serve,index)=><ServDetails
                keys={index}
                serve={serve}
                ></ServDetails>)
            }
            
            
        </div>
      </section>
    );
};

export default Serve;