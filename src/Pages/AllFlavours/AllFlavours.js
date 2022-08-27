import React from 'react';
import  { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';
import './AllFlavours.css'


const AllFlavours = () => {
    const [flavours, setFlavours] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setFlavours(data));
    }, [])
    
    return (
        <div>
        <h1 className='title'><span className='caffe' >All</span> flavours of <span className='caffe' >"COFFEE"</span></h1>
      <div   className='services-container '>
      {
            flavours.map(service => <Service
                 key={service.id}
                 service = {service}
                 ></Service>)
        }
      </div>
      </div>
    );
};

export default AllFlavours;