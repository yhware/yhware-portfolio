import React from 'react';
import SectionTitleText from "../texts/SectionTitleText";
import LandingPageText from "../texts/LandingPageText";
import HighlightText from "../texts/HighlightText";
import styled from "styled-components";
import CenteredPageWrapper from "../components/CenteredPageWrapper";

const AboutPara = styled.div`
  line-height: 4em;
`;


class ProfilePage extends React.Component {

    render() {
        return (
            <CenteredPageWrapper>
                <div>
                    <AboutPara>
                        <SectionTitleText>Profile</SectionTitleText>
                        <LandingPageText>저는 <HighlightText>Royal Holloway, University of London</HighlightText> 에서<br/>
                            <HighlightText>Computer Science</HighlightText> 전공을 하였습니다.<br/>
                            나이는 {new Date().getFullYear() - 1993}살(1994년생)입니다.<br/>
                            <HighlightText>영어는 네이티브</HighlightText>, 불어는 기본 의사소통 가능합니다.
                        </LandingPageText>
                    </AboutPara>
                </div>
            </CenteredPageWrapper>
        )
    }
}

export default ProfilePage;