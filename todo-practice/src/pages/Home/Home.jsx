import React from 'react';
import './Home.css';
import Orb from '../../components/orb/Orb';


const Home = () => {
  return (
    <div className="center-orb-wrapper">
      <div className="orb-box">
        <Orb
          hoverIntensity={1}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
    </div>
  );
};

export default Home;
