import React from 'react';
import './LoginForm.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const LoginForm = () =>{
    return(
        <div className='wrapper'>
            <form action="">
                <h1>CartGo</h1>
            </form>
            className ='phone-signin'
                <PhoneInput
                country={'us'}
                />
         </div>
    );
};

export default LoginForm;
