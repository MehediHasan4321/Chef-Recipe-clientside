import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';
import Foodslider from './Foodslider/Foodslider';
const TrandingFoods = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/trandingRecipe')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
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
        <div className='container mx-auto mt-12'>
            <h1 className='text-3xl font-semibold text-center my-12'>Our Tranding Foods</h1>
            <Slider {...settings}>
                {
                    data.map(recipe=><Foodslider food={recipe}/>)
                }
            </Slider>
        </div>
    );
};

export default TrandingFoods;