import React from 'react';
import { FaHeart, FaLink } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Ratings from '../../../sharePage/Ratings/Ratings';

const ChefImgSlider = ({ chef }) => {
    const { chef_img, chef_name, from, rating, Year_Of_Experince, total_likes, id } = chef

    return (
        <div className='border-2 w-auto flex gap-3 h-96 mx-4'>
            <img className='w-60 ' src={chef_img} alt="" />
            <div className=' flex items-center pl-4'>
                <div className=' space-y-3 text-gray-600'>
                    <h1 className='text-2xl'>{chef_name}</h1>
                    <h2 className='text-xl'>From : {from}</h2>
                    <p>Experence {Year_Of_Experince} <small>Years+</small></p>
                    <p className=' flex items-center gap-2'> <FaHeart />{total_likes}</p>
                    <Ratings num={rating}/>
                   
                    <button className='pt-4'><Link to={`/chef/${id}`} className='py-3 px-4 bg-amber-400 text-white rounded-md font-semibold text-lg'>View Recepi</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ChefImgSlider;