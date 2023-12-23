import React from 'react';
import Block from '../components/Block';

const LevelTest = () => {
  return (
    <div className="page">
      <Block
        to={'/LevelTest/FastTest'}
        data={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel'
        }
      />
      <Block
        to={''}
        data={
          'Lorem ipsum sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam'
        }
      />
    </div>
    
  );
};

export default LevelTest;
