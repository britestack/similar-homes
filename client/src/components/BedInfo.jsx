import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BedIconContainer = styled.div`
  height: 20px;
  width: 20px;
  margin-right: 4px;
  margin-left: 4px;
`;

const BedIcon = () => (
  <div width="20" height="20"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M9.196 14.603h15.523v.027h1.995v10.64h-3.99v-4.017H9.196v4.017h-3.99V6.65h3.99v7.953zm2.109-1.968v-2.66h4.655v2.66h-4.655z" fill="#869099" /></svg></div>
);

const Info = styled.div`
  font-weight: 100;
  height: 24px;
  font-size: 16px;
  padding: 0px;
  color: #3b4144;
  fill: #869099;
  align-items: center;
  display: flex;
  line-height: 24px;
`;

const BedInfo = ({ beds }) => (
  <Info>
    <BedIconContainer>
      <BedIcon />
    </BedIconContainer>
    <p>
      { beds }
      bd
    </p>
  </Info>
);

BedInfo.propTypes = {
  beds: PropTypes.number.isRequired,
};

export default BedInfo;
