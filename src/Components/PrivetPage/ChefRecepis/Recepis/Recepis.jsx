import React from 'react';

const Recepis = ({ recepes }) => {
    console.log(recepes)
    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                recepes.map(recepe => <div key={recepe.id} className='w-96 border-2 rounded-md h-[450px] p-3'>
                    <img className='h-60 w-full' src={recepe.recipe_img} alt="Recepi Images" />
                    <div className='mt-4 px-3'>
                        <h1 className='text-2xl mb-3 font-semibold'>{recepe.name_of_recipe}</h1>
                        <div className='flex justify-between items-center font-semibold'>
                            <p>Time To Cook {recepe.time_to_cook}</p>
                            <p>Rating : {recepe.rating}</p>
                        </div>
                        <p className='mt-2'>{recepe.how_to_cook.length > 100 ? recepe.how_to_cook.slice(0, 90) : recepe.how_to_cook}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Recepis;