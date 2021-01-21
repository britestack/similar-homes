import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  z-index: 2;
  display: inline-flex;
  top: 8px;
  left: 8px;
`;

const NewInfoStyle = styled.div`
  margin-right: 4px;
  text-transform: uppercase;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  color: rgb(5, 34, 134);
  font-size: 12px;
  font-weight: bold;
  line-height: 1.33;
  padding: 2px 4px;
`;

const NewInfo = ({ isNew }) => {
  if (isNew) {
    return (
      <Container>
        <NewInfoStyle>
          <span>NEW</span>
        </NewInfoStyle>
      </Container>
    );
  }

  return (<div />);
};

export default NewInfo;
