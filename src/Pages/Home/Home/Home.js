import React from 'react';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services'
import './Home.css';

const Home = () => {
    return (
        <div>
           <Services></Services>
           <Reviews></Reviews>
        </div>
    );
};

export default Home;