import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 5%;
  z-index: 2;
  position: absolute;
  right: 0;
  top: 0;
`;

const NextButtonInner = styled.button`
  &:hover {
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
    border: 1px solid rgb(255, 255, 255);
  };

  &:active {
    background-color: rgb(150, 150, 150);
    border: 1px solid rgb(150, 150, 150);
  }

  transition: box-shadow 0.1s ease 0s, color 0.1s ease 0s, border-color 0.2s ease 0s, background-color 0.2s ease 0s;
  transition-property: box-shadow, color, border-color, background-color;
  transition-duration: 0.1s, 0.1s, 0.2s, 0.2s;
  transition-timing-function: ease, ease, ease, ease;
  transition-delay: 0s, 0s, 0s, 0s;

  outline: 0;
  border-radius: 40px;
  padding: 1px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border: none;
  background-color: rgba(255, 255, 255, 0);

`;

const RightChevronWrapper = styled.svg`
  &:active {
    fill: rgb(255, 255, 255);
  }
  fill: white;
  height: 24px;
  width: 24px;
  font-size: 0px;
  align-items: center;
`;

const RightChevron = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M27.816 25.935l-1.881 1.88-21.83-21.83 1.88-1.88 21.83 21.83zm-1.881-21.83l1.88 1.88-21.83 21.83-1.88-1.88 21.83-21.83z" /></svg>
);

const ExitModalButton = ({ handleExit }) => (
  <Container>
    <NextButtonInner onClick={handleExit}>
      <RightChevronWrapper>
        <RightChevron />
      </RightChevronWrapper>
    </NextButtonInner>
  </Container>
);

export default ExitModalButton;
