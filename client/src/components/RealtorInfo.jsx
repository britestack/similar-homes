import React from 'react';
import styled from 'styled-components';

const RealtorContainer = styled.div`
  height: 30px;
  width: 224px;
  margin: 4px 0px;
  border-top: 1px solid rgb(205, 209, 212);
  padding-top: 8px;
`;

const RealtorName = styled.div`
  text-transform: uppercase;
  line-height: 13px;
  padding-bottom: 4px;
  color: rgb(134, 144, 153);
  font-size: 10px;
`;

const RealtorInfo = ({ realtor }) => (
  <RealtorContainer>
    <RealtorName>
      {realtor}
    </RealtorName>
  </RealtorContainer>

);

export default RealtorInfo;
