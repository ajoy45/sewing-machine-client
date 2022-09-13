import React from 'react';
import img from '../../images/blogs/blogs-app1.jpg'
const Applied = () => {
    return (
        < section className='text-center'>
        <div className='w-100 mx-auto'>
        <h1 className='text-secondary text-bold text-5xl py-12 text-center'>Manufacturing basic things</h1>
    <img className='w-50 mx-auto' src={img} alt="" />
    <p className='text-secondary font-bold text-xl '>Kimberly-Jayson Corp., Irving, Texas, reports it will invest $30 million to expand and improve its Berkley Mill nonwovens plant in Hendersonville, N.C. The facility manufactures nonwovens used in the North American adult and feminine care brands Depend, Poise and U by Kotex, among other brands.</p><br></br>
    <p className='text-secondary font-bold text-xl'>The two-year project is expected to add 14 new jobs at the site. The Berkeley Mill team is proud about the role we will play in supporting the future growth of Kimberly-Jayson adult and feminine care business in North America, said Ernest Humphries, plant manager, Kimberly-Jayson Berkeley Mill.</p>
</div>

</section>
    );
};

export default Applied;