import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css'

const Navbar = () => {
    return (
        <div >
            <Nav className="justify-content-center">
                <Nav.Item >
                    <Nav.Link className='decor text-white fw-bold rounded-pill  mb-3 mx-2' href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='decor text-white fw-bold rounded-pill  mb-3 mx-2' href="/flavours">All Flavours</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='decor text-white fw-bold rounded-pill  mb-3 mx-2' href="/reviews">Reviews</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='decor text-white fw-bold rounded-pill  mb-3 mx-2' href="/about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='decor text-white fw-bold rounded-pill  mb-3 mx-2' href="/login">Login <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon></Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Navbar;