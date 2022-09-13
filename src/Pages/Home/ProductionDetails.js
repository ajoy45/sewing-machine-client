import React from 'react';
import img1 from '../../images/production/production1.jpg'
const ProductionDetails = ({service}) => {
    const{img,name,description}=service
    return (
        <section className='mt-12'>
        
        <div>
            <div className="card bg-base-100 shadow-xl image-full">
                <figure><img src={img1} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='card_forent '>
                        <img className='w-50 mx-auto pt-5' src={img} alt="" />
                        <h2 className="text-center font-bold py-5 text-3xl">{name}</h2>
                    </div>
                    <div className="card_back hidden text-center py-5">
                        <h1 className='text-center font-bold py-5 text-3xl'>{name}</h1>
                        <p className='text-center font-bold px-5 text-xl'>{description}</p>
                        <button className='btn btn-background text-secondary mt-3'>Buy Now</button>
                    </div>


                </div>
            </div>
        </div>
    </section>
    );
};

export default ProductionDetails;