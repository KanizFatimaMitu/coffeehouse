import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Environment from '../Environment/Environment';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services'
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header></Header>
           <Services></Services>
           <Reviews></Reviews>
           <Environment></Environment>
           <Footer></Footer>
        </div>
    );
};

export default Home;