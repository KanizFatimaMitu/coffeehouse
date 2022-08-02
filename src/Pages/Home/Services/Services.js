import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
          <div  className='services-container'>
          {
                services.map(service => <Service
                     key={service.id}
                     service = {service}
                     ></Service>)
            }
          </div>
        
        
         {/* <h3 className='show-all'>Show All</h3>
         <FontAwesomeIcon icon={faArrowRight} /> */}
         
        </div>
    );
};

export default Services;