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
  margin-bot: 8px;
`;

const Near = ({ homes }) => (
  <NearHomesContainer>
    <Header>New Listings near 195 Rousseau St</Header>
    <div>
      <Carousel homes={homes} />
    </div>
  </NearHomesContainer>
);

export default Near;
