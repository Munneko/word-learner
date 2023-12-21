import React from 'react';
import '../assets/styles/main.css';
import Logo from '../assets/img/logo.svg';
import User from '../assets/img/profile.svg';
import Globe from '../assets/img/globe.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="header">
      <div>
        <svg width="150" height="150">
          <image href={Logo} width="150" height="150" />
        </svg>
      </div>
      <h1>
        <Link to="/">WORD LEARNER </Link>
      </h1>

      <div className="header-right-icons">
        <div className="globe-icon">
          <svg width="50" height="50">
            <image href={Globe} width="50" height="50" />
          </svg>
        </div>
        <div className="user-icon">
          <svg width="50" height="50">
            <image href={User} width="50" height="50" />
          </svg>
        </div>
      </div>
    </div>
  );
};
