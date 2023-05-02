import React, { useEffect, useState } from 'react';

const Footer = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/footer")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className='bg-black min-h-96 w-full py-8'>
            <div className='container mx-auto md:flex justify-around items-center text-white'>
                <div className='text-center md:text-right'>
                    <h1 className=' text-3xl font-semibold'>{data[0]?.title}</h1>
                    <div>
                        {data[0]?.time.map((info, index) => <p key={index} className='my-3 font-semibold'>{info}</p>)}
                    </div>
                </div>
                <div className='text-center'>
                    <h1 className=' text-3xl font-semibold'>{data[1]?.title}</h1>
                    <p className='w-full md:w-60 leading-7 px-4 mt-4'>{data[1]?.dis}</p>
                    <div className='mt-4 flex justify-center gap-3'>
                        {
                            data[1]?.social_link.map((social, index) => <button key={index} className='bg-amber-400 text-white font-semibold p-2 rounded-md'>{social}</button>)
                        }
                    </div>
                </div>
                <div className='text-center md:text-left'>
                    <h1 className=' text-3xl font-semibold'>{data[2]?.title}</h1>
                    <div>
                        {data[2]?.contact.map((info,index)=><p key={index} className='my-3 font-semibold'>{info}</p>)}
                    </div>
                </div>
            </div>
            <hr className=' container mx-auto border-2 border-gray-300 my-8'/>
            <p className='text-white font-semibold text-lg text-center'>{data[3]?.footer_Tag}</p>
        </div>
    );
};

export default Footer;