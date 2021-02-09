import React from 'react';
import styled from 'styled-components';
import Heart from './Heart';
import NewInfo from './NewInfo';
import BedInfo from './BedInfo';
import BathInfo from './BathInfo';
import SqftInfo from './SqftInfo';
import RealtorInfo from './RealtorInfo';
import PriceInfo from './PriceInfo';
import HomeImageCarousel from './HomeImageCarousel';

const Card = styled.div`
  width: 240px;
  font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
  height: 327px:
  box-sizing: border-box;
  line-height: 24px;
  font-size: 15px;
  font-weight: 120;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 224px;
  height: 160px;
`;

const BedBath = styled.div`
  display: flex;
  line-height: 24px;
`;

const StreetAddress = styled.div`
  font-weight: 100px;
  font-size: 16px;
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const InfoContainer = styled.div`
  height: 104px;
  width: 224px;
  padding-top: 8px;
`;

const Home = ({ home, handleClick, handleExit }) => (
  <Card>
    <ImageContainer>
      <Heart />
      <HomeImageCarousel image={home.imageurl} handleClick={handleClick} handleExit={handleExit} />
    </ImageContainer>
    <InfoContainer>
      <PriceInfo price={home.price} decreased={home.decreased} />
      <BedBath>
        <BedInfo beds={home.beds} />
        <BathInfo baths={home.baths} />
        <SqftInfo sqft={home.sqft} />
      </BedBath>
      <StreetAddress>{home.street}</StreetAddress>
      <StreetAddress>{home.zipcode}, {home.city_name}, {home.state_name}</StreetAddress>
    </InfoContainer>
    <RealtorInfo realtor={home.realtor} />
  </Card>
);

export default Home;
