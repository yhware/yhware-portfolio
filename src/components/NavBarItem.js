import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const NavLink = styled(Link)`
  &>:hover {
        color: #ff3e55;
        font-weight: 600;
      }
`;

const NavBarItemStyled = styled.div`
      font-variant: small-caps;
      color: #FFF;
      font-weight: 100;
      font-size: 3em;
`;


const NavBarItem = ({itemLink = "/", itemIcon = "", itemName = ""}) => (
    <NavLink to={itemLink}>
        <NavBarItemStyled>{itemName}</NavBarItemStyled>
    </NavLink>
);

export default NavBarItem