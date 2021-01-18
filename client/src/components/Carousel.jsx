import React from 'react';
import styled from 'styled-components';
import Home from './Home.jsx';

const Carousel = ({ homes }) => {
  const homesList = homes.map((home) => (<Home home={home} />));
  return (
    <div>
      {homesList}
    </div>
  );
};

export default Carousel;
