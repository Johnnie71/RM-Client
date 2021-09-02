import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import signupImage from '../assets/signup.jpeg';

const Auth = () => {
    const [isSignup, setIsSignup] = useState(true);

    const handleChange = () => {};

    return (
        <div className="auth__form-container">
            <div className="auth__form-container_fields">
                <div className="auth__form-container_fields-content">
                    <p>{isSignup ? 'Sign Up' : 'Sign In'}</p>
                    <form onSubmit={() => {}} >
                        {isSignup && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor="fullname">Full Name</label>
                                <input
                                    name='fullname'
                                    type='text'
                                    placeholder='Full Name'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className='auth__form-container_fields-content_input'>
                                <label htmlFor="username">Username</label>
                                <input
                                    name='username'
                                    type='text'
                                    placeholder='Username'
                                    onChange={handleChange}
                                    required
                                />
                        </div>
                        {isSignup && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor="phonenumber">Phone Number</label>
                                <input
                                    name='phonenumber'
                                    type='text'
                                    placeholder='Phone number'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        {isSignup && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor="avatarURL">Avatar URL</label>
                                <input
                                    name='avatarURL'
                                    type='text'
                                    placeholder='Avatar URL'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className='auth__form-container_fields-content_input'>
                                <label htmlFor="password">Password</label>
                                <input
                                    name='password'
                                    type='password'
                                    placeholder='Password'
                                    onChange={handleChange}
                                    required
                                />
                        </div>
                        {isSignup && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    name='confirmPassword'
                                    type='password'
                                    placeholder='Confirm Password'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                    </form>
                    <div className="auth__form-container_fields-account">
                        <p>{isSignup ? "Already have an account?" : "Dont have an account"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;
