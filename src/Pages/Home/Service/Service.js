import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const { name, description, price, img} = service;
    return (
        <div className='service'>
           <img className='picture' src={img} alt=''></img>
            <h2 className='coffee-name'>{name}</h2>
            <p className='coffee-description'>{description.slice(0,120)}.....<span className='see-more'>see more</span></p>
            <h3 className='coffee-price'>$ {price}</h3>
            <button className='cart rounded-pill'>Add to cart</button>
        </div>
    );
};

export default Service;