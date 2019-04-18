import styled from "styled-components";
import React from 'react';


const PStyle = styled.p`
  color: black;
  font-weight: 500;
  font-size: 1.2em;
  line-height: 1.6em;
`;

export default ({children}) => (
    <PStyle>
        {
            children.split("\n").map(line => <span>{line}<br/></span>)
        }
    </PStyle>
)
