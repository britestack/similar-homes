import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 240px;
  font-family: 'TruliaSans', system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
  height: 327px:
  line-height: 24px;
  font-size: 15px;
  font-weight: 120;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 224px;
  height: 160px;
`;

const HomeDivContainer = styled.div`
  position: absolute;
  border-radius: 8px;
  box-sizing: border-box;
  width: 224px;
  height: 160px;
  padding: 9px;
  background-color: #e8e9ea;
`;

const SignSVG = () => (
  <svg width="30" height="30" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M9.75 9.766h17.985v9.03H9.749v-9.03zm-2.673-2.68v19.95h-2.66V4.427h23.318v2.66H7.077z" fill="#869099" /></svg>
);

const TextDivOuter = styled.div`
  padding-top: 8px;
  font-size: 16px;
  line-height: 1.5;
`;

const TextDivInner = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ButtonContainer = styled.div`
  width: 206px;
  height: 46px;
  padding-top: 8px;
`;

const MoreButton = styled.div`
  &:hover {
    background-color: rgb(0, 120, 130);
    color: rgb(255, 255, 255);
  }

  margin-bottom: 4px;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  transition: top 0.1s ease 0s, box-shadow 0.1s ease 0s, border-color 0.1s ease 0s, background-color 0.1s ease 0s, color 0.1s ease 0s;
  white-space: nowrap;
  font-size: 16px;
  line-height: 1.5;
  padding: 8px 16px;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 120, 130);
  border-color: transparent;
`;

const SeeMoreCard = () => (
  <Card>
    <ImageContainer>
      <HomeDivContainer>
        <SignSVG />
        <TextDivOuter>
          See more homes for sale in
          <TextDivInner>
            San Francisco
          </TextDivInner>
        </TextDivOuter>
        <ButtonContainer>
          <MoreButton>Take a look</MoreButton>
        </ButtonContainer>
      </HomeDivContainer>
    </ImageContainer>
  </Card>
);

export default SeeMoreCard;
