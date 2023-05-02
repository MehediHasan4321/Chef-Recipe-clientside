import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';
import ChefImgSlider from './ChefImgSlider/ChefImgSlider';
const Chief = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    
    

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }
    return (
        <div className='container mx-auto mb-12'>
            <h1 className='text-2xl md:text-4xl font-semibold text-center my-12'>Our World Famous Chefs</h1>
            <div>
                <Slider {...settings}>
                    {
                        data.map(d => <ChefImgSlider key={d.id} chef={d} />)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Chief;