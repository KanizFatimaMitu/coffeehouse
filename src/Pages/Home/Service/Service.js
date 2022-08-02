import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const { name, description, price, img} = service;
    return (
        <div className='service'>
           <img className='picture' src={img} alt=''></img>
            <h2 className='coffee-name'>{name}</h2>
            <p className='coffee-description'>{description}</p>
            <h5 className='coffee-price'>{price}</h5>
            <button className='cart'>Add to cart</button>
        </div>
    );
};

export default Service;