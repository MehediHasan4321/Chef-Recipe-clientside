import React from 'react';
import './Main.css'
import Chief from '../Chief/Chief';
import OurStory from '../OurStory/OurStory';
import Testimonial from '../Testimonial/Testimonial';
import Spinner from '../../sharePage/Spinner/Spinner';
import { Toaster, toast } from 'react-hot-toast';
const Main = () => {
    return (
        <>
            <div className='customBanner w-full h-screen'>
                <div className='container mx-auto'>
                <div className='space-y-4 pt-12 md:pt-32 text-center md:text-left px-2'>
                    <h1 className='text-3xl md:text-7xl font-serif text-white'>Wellcome To<span className='text-amber-300'>Foodist</span></h1>
                    <h1 className='text-2xl md:text-5xl font-serif text-white'>Experience culinary perfection <br /> at Foodist</h1>
                    <h1 className='text-2xl md:text-5xl font-serif text-white'> where every dish is a masterpiece!</h1>
                    <p className='w-full md:w-1/3 text-white'>At Foodist, we take pride in our passion for food and our commitment to using only the freshest ingredients in every dish we create. Our chefs are dedicated to perfecting every detail of every recipe, ensuring that each bite is a culinary delight. Whether you're dining with friends, family, or colleagues, we invite you to indulge in the ultimate dining experience at Foodist.</p>
                    <button onClick={()=>toast.success('This button is Deactive !!')} className='bg-amber-400 px-4 py-2 font-semibold rounded'>Explore More</button>
                    <Toaster position='top-right' />
                    </div>
                </div>

            </div>
            <Chief />
            <OurStory/>
            <Testimonial/>
        </>
    );
};

export default Main;