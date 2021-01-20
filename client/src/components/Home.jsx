import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 240px;
  font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
  height: 327px:
  borderSizing: border-box;
  line-height: 24px;
  font-size: 15px;
  font-weight: 120;
`;

const HomeImage = styled.img`
  width: 224px;
  height: 160px;
  object-fit: cover;
  border-radius: 8%;
`;

const PriceText = styled.div`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.1px;
  line-height: 24px;
`;

const BedBath = styled.div`
  display: flex;
  line-height: 24px;
`;

const Info = styled.div`
  height: 24px;
  padding: 0px;
  color: #3b4144;
  fill: #869099;
  align-items: center;
  display: flex;
  line-height: 24px;
`;

const Home = ({ home }) => (
  <Card>
    <HomeImage src={home.imageUrl[0]} alt="missing" />
    <div>
      <PriceText>${home.price}</PriceText>
      <BedBath>
        <Info>
          <i className="fas fa-bed"></i>
          <p>{home.size.beds}bd</p>
        </Info>
        <Info>
          <i className="fas fa-bath"></i>
          <p>{home.size.baths}ba</p>
        </Info>
        <Info>
          <i className="fas fa-ruler-combined"></i>
          <p>{home.size.sqft}sqft</p>
        </Info>
      </BedBath>
      <span>{home.address.street}</span>
      <span>{home.address.neighborhood}, {home.address.city}, {home.address.state}</span>
    </div>
  </Card>
);

export default Home;
