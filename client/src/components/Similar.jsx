import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel.jsx';

const SimilarHomesContainer = styled.div`
  margin: 32px 0px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.h3`
  font-family: 'Cabin';
  font-size: 20px;
  line-height: 1.2;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const Similar = ({ homes, handleClick, handleExit }) => (
  <SimilarHomesContainer>
    <Header>Similar Homes You May Like</Header>
    <div>
      <Carousel homes={homes} handleClick={handleClick} handleExit={handleExit} />
    </div>
  </SimilarHomesContainer>
);

export default Similar;
