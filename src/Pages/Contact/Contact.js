import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import {toast } from 'react-toastify';


const Contact = () => {
    const { register, handleSubmit } = useForm();
    const form = useRef();

    const onSubmit = data => {
        console.log(data);
        emailjs.sendForm('service_l0n3bfu', 'template_y082k3e', form.current, 'AcSivzwbTn901DiIs')
            .then((result) => {
                console.log(result.text);
                console.log('message send')
                toast.success('Message succesfully')
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <section>
            <h1 className='text-center text-secondary text-3xl uppercase pt-5'> Contact Us</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-12 '>
                <div className='ml-32'>
                    <h1 className='text-primary text-bold text-3xl'>Call Us or Fill the Form</h1>

                    <div className='flex mt-3 py-2 '>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-secondary mr-3">
                            <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                            <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
                        </svg>

                        <span className='text-secondary text-xl '>646-872-4210<br></br>
                            Don’t hesitate to contact us
                        </span>

                    </div>

                    <div className='flex mt-3 py-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-secondary mr-3">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                        </svg>


                        <span className='text-secondary text-xl '>646-872-4210<br></br>
                            Don’t hesitate to contact us
                        </span>

                    </div>
                    <div className='flex mt-3 py-2 '>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-secondary mr-3">
                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>


                        <span className='text-secondary text-xl '>Factory Address<br></br>
                            5022 Forest Avenue<br></br>New York <br></br>10013
                        </span>

                    </div>

                </div>
                <div className='ml-32'>
                    <form ref={form} onSubmit={handleSubmit(onSubmit)}>

                        <input {...register("name")} type="text" placeholder="Full Name" className="input input-bordered w-50  max-w-xs mr-3 " />
                        <input {...register("company")} type="text" placeholder="Company" className="input input-bordered w-50 max-w-xs mt-3" /><br></br>
                        <input {...register("email")} type="email" placeholder="E-mail Address" className="input input-bordered w-50 max-w-xs mr-3 mt-3" />
                        <input {...register("phone")} type="text" placeholder="Phone" className="input input-bordered w-50  max-w-xs mt-3" />
                        <br></br>
                        <textarea {...register("textarea")} className="textarea textarea-info w-96 mt-3 p-12 text-center" placeholder="How can We Help? "></textarea><br></br>
                        <input className='w-96 mt-3 bg-primary text-secondary p-4 rounded-lg' type="submit" />
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contact;