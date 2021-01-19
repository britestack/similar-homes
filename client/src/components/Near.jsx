import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel.jsx';

const Near = ({ homes }) => (
  <div>
    <p>New Listings nearby (Fix This)</p>
    <Carousel homes={homes} />
  </div>
);

export default Near;
