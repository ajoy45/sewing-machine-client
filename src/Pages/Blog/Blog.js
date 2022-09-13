import React from 'react'
import img from '../../images/blogs/blogs-menu1.jpg'
import img1 from '../../images/blogs/blogs-app1.jpg'
import { useNavigate } from 'react-router-dom';
const Blog = () => {
    const navigate=useNavigate()
    const handelToMenufectuer=()=>{
         navigate('/menufecture')
    }
    const handelToApplied=()=>{
        navigate('/applied')
    }
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-36 mt-12 mb-5'>
            <div >
            <h1 className='text-secondary font-bold text-3xl text-center py-4'>NEWS</h1>
                <div className="carousel ">
                
                    <div   id="item1" className="carousel-item w-full">
                        
                        <img onClick={()=>handelToMenufectuer()} src={img} className="w-50 cursor-pointer" alt='' />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img onClick={()=>handelToApplied()} src={img1} className="w-50 cursor-pointer" alt='' />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img onClick={()=>handelToMenufectuer()} src={img} className="w-50 cursor-pointer" alt='' />
                    </div>

                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                </div>
            </div>
            <div className='testimonial'>
            <h1 className='text-primary font-bold text-3xl text-center py-4'>TESTIMONIYAL</h1>
                <div className="carousel">
                    <div id="test1" className="carousel-item w-full">
                        <div>
                            <p className='bg-secondary text-xl p-12'>It fits our needs perfectly. It's exactly what I've been looking for. It's really wonderful.</p>
                            <div className="avatar pt-5 pl-3 justify-center items-center">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://placeimg.com/192/192/people" alt='' />
                                </div>
                                <p className='text-primary text-md pl-5'>John S.Gates</p>
                            </div>
                            
                        </div>
                    </div>
                    <div id="test2" className="carousel-item w-full">
                        <div>
                            <p className='bg-secondary text-xl p-12'>It fits our needs perfectly. It's exactly what I've been looking for. It's really wonderful.</p>
                            <div className="avatar pt-5 pl-3 justify-center items-center ">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://placeimg.com/192/192/people"alt='' />

                                </div>
                                <p className='text-primary text-md pl-5 '>Smith-Gorgious</p>
                            </div>
                            
                        </div>
                    </div>

                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#test1" className="btn btn-xs">1</a>
                    <a href="#test2" className="btn btn-xs">2</a>
                </div>
            </div>
        </section>
    );
};

export default Blog;