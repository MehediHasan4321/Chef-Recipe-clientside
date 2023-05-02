import React, { useEffect, useState } from 'react';

const OurStory = () => {
    const [data,setData] =  useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/ourStory')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    const {title,discription,img_URL,piza_img,tomato_img} = data
    return (
        <div className='container mx-auto my-12 grid grid-cols-2 items-center gap-4'>
            <div className=' col-span-1 text-gray-600'>
                <h4 className='text-4xl font-serif text-[#C59D5F]'>Our Story</h4>
                <h1 className='text-7xl font-serif my-4'>{title}</h1>
                <p>{discription}</p>
                <button className=' mt-12 px-4 text-white rounded-md py-2 text-center bg-amber-400 hover:bg-amber-500 font-semibold'>Explore Our Story</button>
            </div>
            <div className=' col-span-1 relative'>
                <img src={img_URL} alt="" />
                <img className=' absolute top-32 right-0' src={tomato_img} alt="tomato image" />
                <img className=' absolute top-60' src={piza_img} alt="" />
            </div>
        </div>
    );
};

export default OurStory;