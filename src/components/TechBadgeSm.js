import React from 'react';
import {Tooltip} from 'antd';
import styled from 'styled-components';

const ImgSm = styled.img`
  min-width: 25px;
  max-width: 40px;
  min-height: 25px;
  max-height: 40px;
  margin: 5px 3px;
`;

const TechBadgeSm = ({imgSrc, imgTag}) => (
    <Tooltip placement="bottom" title={imgTag}>
        <ImgSm src={imgSrc}/>
    </Tooltip>
);

export default TechBadgeSm;