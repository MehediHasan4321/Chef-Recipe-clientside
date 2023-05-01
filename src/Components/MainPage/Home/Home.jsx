import React from 'react';
import Header from '../../sharePage/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../sharePage/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Home;