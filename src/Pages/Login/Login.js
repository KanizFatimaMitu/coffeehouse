import React from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from '../../firebase.init'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [validated, setValidated] = useState(false);
    const [registered, setRegistered] = useState(false);
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleNameBlur = event => {
        setName(event.target.value);
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleRegisteredChange = event => {
        setRegistered(event.target.checked)
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            return;
        }

        if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            setError('Password Should contain at least one special character');
            return;
        }
        setValidated(true);
        setError('');

        if (registered) {
            signInWithEmailAndPassword(auth, email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    
                })
                navigate('/')
                .catch(error => {
                    console.error(error);
                    setError(error.message);
                })
                
        }
        else {
            createUserWithEmailAndPassword(auth, email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    setEmail('');
                    setPassword('');
                    verifyEmail();
                    setUserName();
                })
                navigate('/')
                .catch(error => {
                    console.error(error);
                    setError(error.message);
                })
        }
        event.preventDefault();
    }

    const handlePasswordReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log('email sent')
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => {
                console.log('updating name');
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log('Email Verification Sent');
            })
    }
    return (
        <div>
            <div className="registration w-50 mx-auto mt-5">
                <h2 className="log">Please {registered ? 'Login' : 'Register'}!!</h2>
                <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                    {!registered && <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control onBlur={handleNameBlur} type="text" placeholder="Your Name" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide your name.
                        </Form.Control.Feedback>
                    </Form.Group>}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid password.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onChange={handleRegisteredChange} type="checkbox" label="Already Registered?" />
                    </Form.Group>

                    <p className="text-danger">{error}</p>
                    <Button className='log' onClick={handlePasswordReset} variant="link">Forget Password?</Button>
                    <br />
                    <Button className='log-button' type="submit">
                        {registered ? 'Login' : 'Register'}
                    </Button>
                </Form>
            </div>
        </div>
        // <div className='w-25 mx-auto mt-5'>
        //     <h2 className='log'>Login</h2>
        //     <Form>
        //         <Form.Group className="mb-3" controlId="formBasicEmail">
        //             <Form.Label>Email address</Form.Label>
        //             <Form.Control type="email" placeholder="Enter email" />
        //             <Form.Text className="text-muted">
        //                 We'll never share your email with anyone else.
        //             </Form.Text>
        //         </Form.Group>

        //         <Form.Group className="mb-3" controlId="formBasicPassword">
        //             <Form.Label>Password</Form.Label>
        //             <Form.Control type="password" placeholder="Password" />
        //         </Form.Group>
        //         <Form.Group className="mb-3" controlId="formBasicCheckbox">
        //             <Form.Check type="checkbox" label="Check me out" />
        //         </Form.Group>
        //         <Button variant='light'className='text-danger fs-5 fw-normal' type="submit">
        //             Submit
        //         </Button>
        //     </Form>
        // </div >
    );
};

export default Login;