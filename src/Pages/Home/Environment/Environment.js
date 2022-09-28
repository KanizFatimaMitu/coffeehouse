import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import './Environment.css';
import environment from '../../../images/environment.jpg'


const Environment = () => {
    return (
        <div className='high'>

            <div class="card">
                <div class="card-body">
                    <h5 class="card-title"><FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>   We provide best environment !</h5>
                    <p class="card-text">" I had a great time eating delicious food at your restaurant. The waiters and waitresses were committed to great service and were very friendly. The atmosphere was awesome and I definitely liked that you have a very modern style. Most importantly, every food and drink on your menu tasted great! "</p>
                </div>
                <div className='pic'>
                    <img src={environment} class="card-img-bottom" alt="..." />
                </div>

            </div>
        </div>
    );
};

export default Environment;