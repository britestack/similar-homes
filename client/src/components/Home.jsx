import React from 'react';
import styled from 'styled-components';
import Heart from './Heart';
import NewInfo from './NewInfo';
import BedInfo from './BedInfo';
import BathInfo from './BathInfo';
import SqftInfo from './SqftInfo';
import RealtorInfo from './RealtorInfo';
import PriceInfo from './PriceInfo';

const Card = styled.div`
  width: 240px;
  font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
  height: 327px:
  borderSizing: border-box;
  line-height: 24px;
  font-size: 15px;
  font-weight: 120;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 224px;
  height: 160px;
`;

const HomeImage = styled.img`
  position: absolute;
  z-index: 1;
  width: 224px;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
`;

const BedBath = styled.div`
  display: flex;
  line-height: 24px;
`;

const StreetAddress = styled.div`
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
  font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
`;

const Home = ({ home }) => (
  <Card>
    <ImageContainer>
      <NewInfo isNew={home.new} />
      <Heart />
      <HomeImage src={home.imageUrl[0]} alt="missing" />
    </ImageContainer>
    <InfoContainer>
      <PriceInfo price={home.price} decreased={home.decreased} />
      <BedBath>
        <BedInfo beds={home.size.beds} />
        <BathInfo baths={home.size.baths} />
        <SqftInfo sqft={home.size.sqft} />
      </BedBath>
      <StreetAddress>{home.address.street}</StreetAddress>
      <StreetAddress>{home.address.neighborhood}, {home.address.city}, {home.address.state}</StreetAddress>
    </InfoContainer>
    <RealtorInfo realtor={home.realtor} />
  </Card>
);

export default Home;
