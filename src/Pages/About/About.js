import React from 'react';
import './About.css'
import Card from 'react-bootstrap/Card';

const About = () => {
    return (
        <div >
            <Card className='w-90 about h-20 bg-dark mx-auto '>
                <Card.Body >
                    <Card.Title className='fs-2 text-white'>I am "Kaniz Fatima"</Card.Title>
                    <Card.Subtitle className="mb-2 text-secondary fs-5">MERN stack developer</Card.Subtitle>
                    <Card.Text className='fs-3 text-white'>
                    "I am a MERN stack web developer. I love to use my creativity and make something new. That's why I love to play with code. Over the last year, I gather knowledge in various parts of web development by myself. My ultimate goal is to become an awesome full-stack web developer who can make beautiful UIs and also can handle the back-end smoothly. "
                    </Card.Text>
                   <Card.Link className='bg-secondary text-white text-decoration-none rounded-pill fw-bold p-3 fs-5 mb-3' target="_blank" href="https://www.linkedin.com/in/kaniz-mitu/">Linkedin</Card.Link>
                    <Card.Link className='bg-secondary text-white text-decoration-none rounded-pill fw-bold p-3 fs-5'  target="_blank" href="https://github.com/KanizFatimaMitu">Github</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default About;