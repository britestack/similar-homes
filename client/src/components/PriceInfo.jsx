import React from 'react';
import styled from 'styled-components';

const TopContainer = styled.div`
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
`;

const PriceText = styled.div`
  font-family: Cabin;
  margin-right: 8px;
  font-size: 19px;
  line-height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DownArrowContainer = styled.div`
  height: 20px;
  width: 20px;
  color: green;
`;

const DownArrow = () => (
  <div><svg data-testid="property-trend-down" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.161 22.414l5.776-5.11 1.762 1.992-8.73 7.725-9.005-7.692 1.727-2.023 5.81 4.963V5.863h2.66v16.55z" fill="#00b25b" /></svg></div>
);

const numberWithCommas = (x) => (
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
);

// Proxy for determining whether price has recently dropped

const PriceInfo = ({ price, decreased }) => {
  const formattedPrice = `$${numberWithCommas(price)}`;
  if (decreased) {
    return (
      <TopContainer>
        <PriceText>
          {formattedPrice}
        </PriceText>
        <DownArrowContainer>
          <DownArrow />
        </DownArrowContainer>
      </TopContainer>
    );
  }

  return (
    <PriceText>
      {formattedPrice}
    </PriceText>
  );
};

export default PriceInfo;
