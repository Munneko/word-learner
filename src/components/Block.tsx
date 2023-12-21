import React from 'react';
import '../assets/styles/main.css';
import { Link } from 'react-router-dom';

const Block = (props: { to: string; data: string }) => {
  return (
    <Link to={props.to} className="block">
      {props.data}
    </Link>
  );
};

export default Block;
