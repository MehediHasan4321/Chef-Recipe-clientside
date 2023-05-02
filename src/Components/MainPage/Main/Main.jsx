import React from 'react';
import './Main.css'
import Chief from '../Chief/Chief';
import TrandingFoods from '../TrandingFoods/TrandingFoods';
import OurStory from '../OurStory/OurStory';
import Testimonial from '../Testimonial/Testimonial';
const Main = () => {
    return (
        <>
            <div className='customBanner w-full h-screen'>
                <div className='container mx-auto'>

                </div>

            </div>
            <Chief />
            <OurStory/>
            <Testimonial/>
        </>
    );
};

export default Main;