import React from 'react';
import NavBarItem from "./NavBarItem";
import Menu from "../data/Menu";
import styled from "styled-components";
import {Icon} from "antd";

const NavBarWrapper = styled.div`
  height: 100vh;
  background: #012963;
  padding: 30px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const LinkSection = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  max-height: 400px;
  width: 100%;
  padding: 0 0 10px 0;
`;

const LinkItem = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
`;

const LinkIcon = styled(Icon)`
  color: #fff;
  font-size: 30px;
  margin: 0 10px 0 0;
`;

const LinkText = styled.span`
  color: rgba(255,255,255,0.8);
  font-size: 1em;
  display: block;
  
`;

const NavigationBar = () => {
    return (
        <NavBarWrapper>
            <div>
            {
                Menu.map(({menuName, menuLink}) => (<NavBarItem itemName={menuName} itemLink={menuLink}/>))
            }
            </div>
            <LinkSection>
                <LinkItem>
                    <LinkIcon type="github"/>
                    <a href="https://github.com/yhware" rel="noopener noreferrer" target="_blank">
                        <LinkText>github.com/yhware</LinkText>
                    </a>
                </LinkItem>
                <LinkItem>
                    <LinkIcon type="mail"/>
                    <a href="mailto:dkim331@gmail.com">
                        <LinkText>dkim331@gmail.com</LinkText>
                    </a>
                </LinkItem>
                <LinkItem>
                    <LinkIcon type="linkedin"/>
                    <a href="https://www.linkedin.com/in/yuhong-kim" rel="noopener noreferrer" target="_blank">
                        <LinkText>linkedin.com/in/yuhong-kim</LinkText>
                    </a>
                </LinkItem>
            </LinkSection>
        </NavBarWrapper>
    )
};

export default NavigationBar;