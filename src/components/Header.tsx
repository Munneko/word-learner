import React from 'react';
import '../assets/styles/main.css';
import Logo from '../assets/img/logo.svg'

export const Header = () => {
  return (
    <div className='Header'>
      <div >
      <svg width="150" height="150" >
          <image href={Logo} width="150" height="150" />
        </svg>
       
      </div>
      <h1>WORD LEARNER</h1>
    </div>
  );
};
