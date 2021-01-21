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

const HomeImageContainer = styled.div`
  position: absolute;
  width: 224px;
  height: 160px;
  border-radius: 8px;
  overflow: hidden;
`;
const HomeImage = styled.img`
  object-fit: cover;
  border-radius: 8px;
  position: absolute;
  z-index: 1;
  width: 224px;
  height: 160px;
  -webkit-transition: all 0.7s ease; /* Safari and Chrome */
  -moz-transition: all 0.7s ease; /* Firefox */
  -ms-transition: all 0.7s ease; /* IE 9 */
  -o-transition: all 0.7s ease; /* Opera */
  transition: all 0.7s ease;

  &:hover {
    -webkit-transform:scale(1.2); /* Safari and Chrome */
    -moz-transform:scale(1.2); /* Firefox */
    -ms-transform:scale(1.2); /* IE 9 */
      -o-transform:scale(1.2); /* Opera */
      transform:scale(1.2);
  };
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

const Home = ({ home }) => (
  <Card>
    <ImageContainer>
      <NewInfo isNew={home.new} />
      <Heart />
      <HomeImageContainer>
        <HomeImage src={home.imageUrl[0]} alt="missing" />
      </HomeImageContainer>
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
