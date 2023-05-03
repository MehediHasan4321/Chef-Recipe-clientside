import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import Recepis from './Recepis/Recepis';
import Ratings from '../../sharePage/Ratings/Ratings';

const ChefRecepis = () => {
    const data = useLoaderData({})
    const { chef_img, chef_name, Year_Of_Experince, rating, recipe, total_likes, from, social_media, description } = data

    return (
        <div className='container mx-auto my-12'>
            <div className='w-full h-[40vh] flex gap-6'>
                <img className='h-full' src={chef_img} alt="" />
                <div className='space-y-3 text-gray-600'>
                    <h1 className='text-5xl font-semibold'>{chef_name}</h1>
                    <p className='text-xl font-semibold'>From : {from}</p>
                    <p className='text-xl'>Year Of Experience {Year_Of_Experince} <small>Years+</small></p>
                    <Ratings num={rating}/>
                    <p className=' flex items-center gap-3'><FaHeart /> {total_likes}</p>
                    <div>
                        {
                            social_media.map((social,index) => <button key={index} className='py-2 px-3 text-center text-white bg-amber-400 rounded-md mx-2 font-semibold'>{social}</button>)
                        }
                    </div>
                    <p>{description}</p>
                </div>
            </div>
            <div className=' mt-12'>
                <Recepis recepes={recipe} />
            </div>
        </div>
    );
};

export default ChefRecepis;