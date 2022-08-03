import React from 'react';
import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
    return (
        <div >
             <Nav  className="justify-content-center">
                <Nav.Item >
                    <Nav.Link className='text-secondary fw-bold rounded-pill bg-light mb-3 mx-2' href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='text-secondary fw-bold rounded-pill bg-light mb-3 mx-2' href="/flavours">All Flavours</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='text-secondary fw-bold rounded-pill bg-light mb-3 mx-2' href="/reviews">Reviews</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='text-secondary fw-bold rounded-pill bg-light mb-3 mx-2' href="/about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='text-secondary fw-bold rounded-pill bg-light mb-3 mx-2' href="/login">Login</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Navbar;