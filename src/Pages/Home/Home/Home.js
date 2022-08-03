import React from 'react';
import Header from '../../Shared/Header/Header';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services'
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header></Header>
           <Services></Services>
           <Reviews></Reviews>
        </div>
    );
};

export default Home;