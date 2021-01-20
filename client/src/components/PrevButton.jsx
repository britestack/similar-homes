import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  z-index: 1;
  position: absolute;
  top: calc(50% - 24px);
`;

const PrevButtonInner = styled.button`
  transition: box-shadow 0.1s ease 0s, color 0.1s ease 0s, border-color 0.2s ease 0s, background-color 0.2s ease 0s;
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
  color: black;
`;

const ChevronWrapper = styled.svg`
  height: 24px;
  width: 24px;
  font-size: 0px;
  align-items: center;
`;

const LeftChevron = () => (
  <svg class="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M14.292 16.494l7.147 7.056-1.869 1.893-9.067-8.951 9.069-8.927 1.866 1.896z" fill="rgb(59, 65, 68)"></path></svg>
);

const PrevButton = ({ handleClick }) => (
  <Container>
    <PrevButtonInner onClick={handleClick}>
      <ChevronWrapper>
        <LeftChevron />
      </ChevronWrapper>
    </PrevButtonInner>
  </Container>
);

export default PrevButton;
