import React from 'react';
import '../assets/styles/main.css';
import Block from '../components/Block';

const Home = () => {
  return (
    <div className="home">
      <div className="home-greeting">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel
        sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam
        eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto
        voluptate aliquam nihil, eveniet aliquid culpa officia aut!
      </div>

      <Block to={'/LevelTest'} data={'test your english'} />
      <Block to={''} data={'topics vocabulary'} />
      <Block to={''} data={'grammar'} />
    </div>
  );
};
export default Home;
