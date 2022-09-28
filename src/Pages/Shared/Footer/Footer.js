import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'


const Footer = () => {
    return (
        <div className='footer'>
            <footer id="last-part">
                <h5 id="last1">"All copyright deserved @2022 CoffeeHouseteam.com"</h5>
                <p id='last2'>Email: kanizfatima528@gmail.com </p>
                <p id='last2'>FaceBook | Twitter | Linkedin | Github | Instagram </p>
                <p id="last3" ><FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon> Banani, Bangladesh </p>
            
            </footer>
        </div>

    );
}



export default Footer;