import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel.jsx';

const Similar = ({ homes }) => (
  <div>
    <div>Similar Homes You May Like</div>
    <Carousel homes={homes} />
  </div>
);

export default Similar;
