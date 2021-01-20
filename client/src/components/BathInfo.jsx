import React from 'react';
import styled from 'styled-components';

const BathIconContainer = styled.div`
  height: 20px;
  width: 20px;
`;

const BathIcon = () => (
  <div width="20" height="20" class="getSvgContainer__SvgContainer-sc-30hfky-0 cnYhHF"><svg class="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M23.981 15.947H26.6v1.33a9.31 9.31 0 0 1-9.31 9.31h-2.66a9.31 9.31 0 0 1-9.31-9.31v-1.33h16.001V9.995a2.015 2.015 0 0 0-2.016-2.015h-.67c-.61 0-1.126.407-1.29.965a2.698 2.698 0 0 1 1.356 2.342H13.3a2.7 2.7 0 0 1 1.347-2.337 4.006 4.006 0 0 1 3.989-3.63h.67a4.675 4.675 0 0 1 4.675 4.675v5.952z" fill="#869099"></path></svg></div>
);

const Info = styled.div`
  height: 24px;
  padding: 0px;
  color: #3b4144;
  fill: #869099;
  align-items: center;
  display: flex;
  line-height: 24px;
`;

const BathInfo = ({ baths }) => (
  <Info>
    <BathIconContainer>
      <BathIcon />
    </BathIconContainer>
    <p>{ baths }ba</p>
  </Info>
);

export default BathInfo;
