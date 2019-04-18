import React from 'react';
import NameText from "../texts/NameText";
import styled from "styled-components";
import LandingPageText from "../texts/LandingPageText";
import CenteredPageWrapper from "../components/CenteredPageWrapper";


const PDFText = styled.p`
  color: #ff3e55;
  font-size: 1.5em;
  font-weight: 700;
  margin: 20px 0 50px 0;
  cursor: pointer;
  
  &:hover{
    color: rgba(255,62,85,0.8);
  }
`;


class LandingPage extends React.Component {

    render() {
        return (
            <CenteredPageWrapper>
                <div>
                    <LandingPageText>안녕하세요,</LandingPageText>
                    <div style={{margin: '20px 0 25px 0'}}>
                        <NameText>김유홍</NameText><LandingPageText>이라고 합니다</LandingPageText>
                    </div>
                    <div>
                        <LandingPageText>
                            Microsoft, 삼성SDS, Accenture 인턴쉽을 거치며 <br/>
                            만드는 상품의 핵심 가치를 파악할줄 아는 개발자입니다.
                        </LandingPageText>
                    </div>
                    <PDFText onClick={() => alert("준비중입니다!")}>PDF로 보기 ></PDFText>
                </div>
            </CenteredPageWrapper>
        )
    }
}

export default LandingPage;