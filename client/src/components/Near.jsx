import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel.jsx';

const NearHomesContainer = styled.div`
  margin: 32px 0px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.h3`
  font-family: Cabin;
  font-weight: bold;
  font-size: 20px;
  line-height: 1.2;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const Near = ({ homes, handleClick, handleExit }) => (
  <NearHomesContainer>
    <Header>New Listings near 435 Marina Blvd</Header>
    <div>
      <Carousel homes={homes} handleClick={handleClick} handleExit={handleExit} />
    </div>
  </NearHomesContainer>
);

export default Near;
