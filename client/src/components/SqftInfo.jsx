import React from 'react';
import styled from 'styled-components';

const SqftIconContainer = styled.div`
  height: 20px;
  width: 20px;
  margin-right: 4px;
  margin-left: 4px;
`;

const SqftIcon = () => (
  <div width="20" height="20" class="getSvgContainer__SvgContainer-sc-30hfky-0 cnYhHF"><svg class="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M13.748 21.276l-3.093-3.097v3.097h3.093zm12.852 5.32H10.655v.004h-5.32v-.004H5.32v-5.32h.015V5.32L26.6 26.596z" fill="#869099"></path></svg></div>
);

const Info = styled.div`
  font-weight: 100;
  font-size: 16px;
  height: 24px;
  padding: 0px;
  color: #3b4144;
  fill: #869099;
  align-items: center;
  display: flex;
  line-height: 24px;
`;

const SqftInfo = ({ sqft }) => (
  <Info>
    <SqftIconContainer>
      <SqftIcon />
    </SqftIconContainer>
    <p>{ sqft } sqft</p>
  </Info>
);

export default SqftInfo;
