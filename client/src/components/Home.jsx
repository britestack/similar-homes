import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 240px;
  height: 327px:
  borderSizing: border-box;
`;

const HomeImage = styled.img`
  width: 224px;
  height: 160px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 8%;
`;

const PriceText = styled.div`
  color: #3b4144;
  font-size: 20px;
  font-weight: 700;
  padding-left: 8px;
  padding-right: 8px;
  letter-spacing: -0.1px;
  line-height: 24px;
`;

const Home = ({ home }) => (
  <div>
    <Card>
      <HomeImage src={home.imageUrl[0]} alt="missing" />
      <div>
        <PriceText>${home.price}</PriceText>
        <br></br>
        <span>{home.size.beds}bd {home.size.baths}ba {home.size.sqft}sqft</span>
        <br></br>
        <span>{home.address.street}</span>
        <br></br>
        <span>{home.address.neighborhood}, {home.address.city}, {home.address.state}</span>
      </div>
    </Card>
  </div>
);

export default Home;
