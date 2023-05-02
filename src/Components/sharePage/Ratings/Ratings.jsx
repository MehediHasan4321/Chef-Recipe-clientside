import React, { useState } from 'react';
import { FaRegStar, FaStar, FaStarHalf } from 'react-icons/fa';

const Ratings = ({num}) => {
    const [ratingNumber,setRatingNumber] = useState(5)

    if(num  === '5'){
        return <span className='flex gap-1 text-amber-400'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
        </span>
    }
    else if(num === '4.5' ){
        return <span className='flex gap-1 text-amber-400'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalf/>
        </span>
    }
    else if(num === '4'){
        return <span className='flex gap-1 text-amber-400'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaRegStar/>
        </span>
    }
    else if(num === '3.5'){
        return <span className='flex gap-1 text-amber-400'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalf/>
            <FaRegStar/>
        </span>
    }
    else if(num === '3'){
        return <span className='flex gap-1 text-amber-400'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaRegStar/>
            <FaRegStar/>
        </span>
    }
    else{
        return <span className='flex gap-1 text-amber-400'>
            <FaRegStar/>
            <FaRegStar/>
            <FaRegStar/>
            <FaRegStar/>
            <FaRegStar/>
        </span>
    }
    return ratingNumber
};

export default Ratings;