import React, { useState } from 'react';
import Ratings from '../../../sharePage/Ratings/Ratings';
import { FaClock, FaHeart } from 'react-icons/fa';
import { Toaster, toast } from 'react-hot-toast';

const Recepis = ({ recepes }) => {
    const [dis,setDis] = useState(false)
    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                recepes.map(recepe => <div key={recepe.id} className='w-96 border-2 rounded-md h-[450px] p-3'>
                    <img className='h-60 w-full' src={recepe.recipe_img} alt="Recepi Images" />
                    <div className='mt-4 px-3'>
                        <h1 className='text-2xl mb-2 font-semibold'>{recepe.name_of_recipe}</h1>
                        <div className='flex justify-between items-center font-semibold'>
                            <p className='flex items-center gap-2'><FaClock className='text-amber-400' /> {recepe.time_to_cook}</p>
                            <Ratings num={recepe.rating} />

                            <button disabled={dis} onClick={() => {
                                toast(`${recepe.name_of_recipe} is your favorite`)
                                
                            }} className=' text-5xl text-amber-400 disabled:text-gray-500'>&hearts;</button>
                            <Toaster />
                        </div>
                        <p className='mt-1'>{recepe.how_to_cook.length > 100 ? recepe.how_to_cook.slice(0, 90) : recepe.how_to_cook}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Recepis;