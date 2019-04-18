import styled from 'styled-components';
import React from 'react';

const PStyle = styled.p`
  color: #FFF;
  font-weight: 300;
  font-size: 1.7em;
  line-height: 1.7em;
`;

export default ({children}) => (
    <PStyle>
        {
            children.split("\n").map(line => <span>{line}<br/></span>)
        }
    </PStyle>
)
