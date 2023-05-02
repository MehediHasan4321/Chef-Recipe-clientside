import React from 'react';
import Ratings from '../../../sharePage/Ratings/Ratings';

const ReviewSlider = ({review}) => {
    const {comment,date,rating,user_img,user_name} = review
    return (
        <div className=' mt-12'>
            <p className=' font-semibold px-12'>{comment.slice(0,150)}</p>
            <div className='flex items-center gap-6 mt-6'>
                <img className='w-24 rounded-full' src={user_img} alt="" />
                <div>
                    <Ratings num={rating}/>
                    <h2 className='text-2xl font-semibold mt-3'>{user_name}</h2>
                    <small className='text-gray-600 font-semibold'>{date}</small>
                </div>
            </div>
        </div>
    );
};

export default ReviewSlider;