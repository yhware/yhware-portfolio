import React from 'react';
import styled from 'styled-components';
import Menu from "../data/Menu";
import {Link} from "react-router-dom";

const MobileNavWrapper = styled.div`
 
    @media (max-width: 767px) {  
      height: 70px;
      width: 100vw;
      background: #012963;
      position: fixed;
      top:0;
      left: 0;
    }
    @media (min-width: 768px) {  
         display: none;
    }
    
    display: flex;
    align-items: center;    
    font-size: 25px;
    z-index: 999;
    position: relative;
  
`;

const MenuBtnWrapper = styled.div`
    padding: 0 15px;
    width: 100%;
`;

const LogoWrapper = styled.div`
    color: #FFF;
    font-size: 1.2em;
    font-variant: small-caps;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  display: flex;
  justify-content: center;
  align-items: center;     
`;

const MenuWrapper = styled.div`
  background: #012963;
  position: fixed;
  top: 70px;
  left: 0;
  width :100%;
  padding: 0 0 10px 0;
  overflow-y: hidden;
  transition-property: all;
  transition-duration: .5s;
  transition-timing-function: cubic-bezier(0.5, 1, 0.5, 1);
  max-height: 500px;
  
`;

const MenuItem = styled.div`
  height: 40px;
  width: 100%;
  .span {
    display: block;
  }
  font-size: 0.8em;
  color: #FFF;
  text-align: center;
  vertical-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const MobileNav = ({isMobileMenuOpen, onHamburgerClickHandler, onMobileMenuClickHandler}) => (
    <MobileNavWrapper>
        <LogoWrapper>
            <span>Portfolio</span>
        </LogoWrapper>
        <MenuBtnWrapper>
            <button
                className={`hamburger hamburger--collapse ${isMobileMenuOpen ? "is-active" : ""}`}
                type="button"
                onClick={() => onHamburgerClickHandler()}
                style={{paddingTop: 10}}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"/>
              </span>
            </button>
        </MenuBtnWrapper>
        <MenuWrapper style={isMobileMenuOpen ? {} : {maxHeight: 1, padding: 0}}>
            {
                Menu.map(({menuName, menuLink}) => (
                    <Link to={menuLink} onClick={() => onMobileMenuClickHandler()}>
                        <MenuItem>
                            <span>{menuName}</span>
                        </MenuItem>
                    </Link>
                ))
            }
        </MenuWrapper>
    </MobileNavWrapper>
);


export default MobileNav;