import React from 'react'
import {Link} from "react-router-dom";
import styled from "styled-components";
import LandingPageMenuBtn from "./buttons/LandingPageMenuBtn";


const LandingPageNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Navigation = () => {
    return (
        <LandingPageNavWrapper>
            <Link to="/profile">
                <LandingPageMenuBtn icon="account_circle" icon_name="프로필"/>
            </Link>
            <Link to="/skills">
                <LandingPageMenuBtn icon="build" icon_name="스킬"/>
            </Link>
            <Link to="/projects">
                <LandingPageMenuBtn icon="work" icon_name="프로젝트"/>
            </Link>
        </LandingPageNavWrapper>
    )
};

export default Navigation