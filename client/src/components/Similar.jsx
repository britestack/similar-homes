import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel.jsx';

const Similar = ({ homes }) => (
  <div>
    <div>Similar Homes You May Like</div>
    <div>
      <Carousel homes={homes} />
    </div>
  </div>
);

export default Similar;
