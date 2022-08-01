import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const { name, description, price, img} = service;
    return (
        <div className='service'>
           <img className='picture' src={img} alt=''></img>
            <h2>{name}</h2>
            <p>{description}</p>
            <h5>{price}</h5>
            <button className='cart'>Add to cart</button>
        </div>
    );
};

export default Service;