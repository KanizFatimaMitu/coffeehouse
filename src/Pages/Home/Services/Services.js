import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
const [services, setServices] = useState([]);

useEffect(()=>{
    fetch('services.json')
    .then(res => res.json())
    .then(data => setServices(data));
}, [])

    return (
        <div>
            <h1 className='title'>Our Services</h1>
          <div  className='services-container w-75 mx-auto'>
          {
                services.slice(0,6).map(service => <Service
                     key={service.id}
                     service = {service}
                     ></Service>)
            }
          </div>
        
        
         <h6 className='show-all bg-white text-danger fw-bolder rounded-pill w-25 mx-auto mt-2 mb-5'>Show All</h6>
        
         
        </div>
    );
};

export default Services;