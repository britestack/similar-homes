import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  z-index: 2;
  position: absolute;
  right: 0px;
  top: calc(50% - 24px);
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
  border-radius: 24px;
  padding: 1px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border: 1px solid rgb(232, 233, 234);
  background-color: rgb(255, 255, 255);

`;

const RightChevronWrapper = styled.svg`
  &:active {
    fill: rgb(255, 255, 255);
  }
  fill: rgb(59, 65, 68);
  height: 24px;
  width: 24px;
  font-size: 0px;
  align-items: center;
`;

const RightChevron = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.65 16.513l-7.147-7.055 1.868-1.893 9.068 8.951-9.069 8.927-1.866-1.896z"></path></svg>
);

const NextButton = ({ handleClick, view }) => {
  if (view < 4) {
    return (
      <Container>
        <NextButtonInner onClick={handleClick}>
          <RightChevronWrapper>
            <RightChevron />
          </RightChevronWrapper>
        </NextButtonInner>
      </Container>
    );
  }

  return (<div />);
};
export default NextButton;
