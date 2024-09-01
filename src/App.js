import './App.css';
import CartGo from './Components/LoginForm/LoginForm';
import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function App() {
  return (
  <div 
  CartGo
  className='phone-signin'>
          <PhoneInput
          country={'us'}
          />
    </div>
  );
}

export default App;
