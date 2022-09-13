import React from 'react';
import img from '../../images/discount.png'
const Discount = () => {
    return (
        <div style={{background:'#00ce87'}} className='grid grid-cols-1 md:grid-cols-2 justify-center items-center mt-6 mb-6'>
            <div>
                <h1 className='text-secondary font-bold text-3xl text-center '>Up To 40% Off Our Most Popular Machines!</h1>
            </div>
            <div>
                <img className='py-4 mb-[-100px]' width={250} src={img} alt="" />
            </div>

        </div>
    );
};

export default Discount;