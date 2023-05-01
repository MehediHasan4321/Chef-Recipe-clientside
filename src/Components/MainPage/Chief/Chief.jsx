import React, { useEffect, useState } from 'react';

const Chief = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    
    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl font-semibold text-center my-12'>Our World famus Chefs</h1>
            {
                data.map(chef=><img key={chef.id} className='w-48 flex gap-5' src={chef.chef_img} alt="" />)
            }
        </div>
    );
};

export default Chief;