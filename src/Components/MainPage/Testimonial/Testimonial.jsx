import React, { useEffect, useState } from 'react';
import ReviewSlider from './ReviewSlider/ReviewSlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';
const Testimonial = () => {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch('http://localhost:3000/testimonial')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])
    const { chif_img, title,review } = data
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
    
    }
    return (
        <>
            <h1 className=' text-4xl font-semibold text-center my-24'>Our Testimonial</h1>
            <div className=' container mx-auto grid grid-cols-2 gap-4 justify-between items-center'>
                <div className=' col-span-1'>
                    <img src={chif_img} alt="testimonial chif imgaes" />
                </div>
                <div className=' col-span-1'>
                    <h1 className='text-6xl font-serif'>{title}</h1>
                    <div>
                        <Slider {...settings}>
                            {
                                review?.map(rev => <ReviewSlider key={rev.id} review={rev} />)
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;