import React from 'react';
import Header from '../sharePage/Header/Header';
import Footer from '../sharePage/Footer/Footer';
import { Link } from 'react-router-dom';

const FourOFour = () => {
    return (
        <>
            <Header />
            <div className=' container mx-auto min-h-[60vh] flex justify-center items-center'>
                <div className='text-center'>
                <img className='w-80 ' src="https://thumbs.dreamstime.com/b/%C3%B0%C2%BF%C3%B0%C2%B5%C3%B1%E2%80%A1%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B1%C5%93-134036857.jpg" alt="404 page Images" />
                <Link to={'/'} className='bg-amber-400 px-4 py-2 font-semibold rounded'><button className='mt-8'>Back To Home</button></Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default FourOFour;