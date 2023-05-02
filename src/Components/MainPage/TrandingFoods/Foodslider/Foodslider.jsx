import React from 'react';

const Foodslider = ({food}) => {
    const {recipe_img,name_of_recipe,time_to_cook    } = food
    return (
        <div className=' border-2 p-3 w-96 h-[450px]'>
            <img className='w-full h-60' src={recipe_img} alt="" />
            <div>
                <h1 className='text-2xl '>{name_of_recipe}</h1>
            </div>
        </div>
    );
};

export default Foodslider;