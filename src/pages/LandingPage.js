import React from 'react';
import NameText from "../texts/NameText";
import styled from "styled-components";
import LandingPageText from "../texts/LandingPageText";
import CenteredPageWrapper from "../components/CenteredPageWrapper";
import {Link} from "react-router-dom";


const PDFText = styled.p`
  color: #ff3e55;
  font-size: 1.5em;
  font-weight: 700;
  margin: 20px 0 50px 0;
  cursor: pointer;
  
  &:hover{
    color: rgba(255,62,85,0.8);
  }
  
  
  @media (max-width: 576px) {  
    display: none;
  }
`;

const PostNameText = styled.span`
    display: block;
    font-size: 1.8em;
    font-weight: 800;
    text-align: right;
    margin: 10px 10px 0 0;
    color: #fff;
`;

const CompanyLogoBox = styled.div`
  display: flex;
  justify-content: space-between;
  
`;

const CompanyLogoImg = styled.img`
  max-width: 120px;
`;

const GoToProjectsBtn = styled.button`
    min-width: 300px;
    width: 100%;
    height: 50px;
    background: #ff3e55;
    border: none;
    font-weight: 700;
    font-size: 1.5em;
    color: #FFF;
    margin: 15px 0;
    outline: none;
`;


class LandingPage extends React.Component {

    render() {
        return (
            <CenteredPageWrapper>
                <div>
                    <LandingPageText>안녕하세요,</LandingPageText>
                    <div style={{margin: '20px 0 0 0'}}>
                        <NameText>김유홍</NameText><PostNameText>이라고 합니다</PostNameText>
                    </div>
                    <div>
                        <CompanyLogoBox>
                            <a href="https://microsoft.com" target="_blank" rel="noopener noreferrer">
                                <CompanyLogoImg
                                    alt="microsoft logo"
                                    src="https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/company-logo/ms_logo.png"
                                />
                            </a>
                            <a href="https://www.samsungsds.com" target="_blank" rel="noopener noreferrer">
                                <CompanyLogoImg
                                    alt="samsung sds logo"
                                    src="https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/company-logo/samsung_logo.png"
                                />
                            </a>
                            <a href="https://accenture.com" target="_blank" rel="noopener noreferrer">
                                <CompanyLogoImg
                                    alt="accenture logo"
                                    src="https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/company-logo/accenture_logo.png"
                                />
                            </a>
                        </CompanyLogoBox>
                        <LandingPageText>
                            Microsoft, 삼성SDS, Accenture 인턴쉽을 거치며 <br/>
                            만드는 상품의 핵심 가치를 파악할줄 아는 개발자입니다.
                        </LandingPageText>
                    </div>
                    <PDFText onClick={() => alert("준비중입니다!")}>PDF로 보기 ></PDFText>
                    <Link to="/projects"><GoToProjectsBtn>프로젝트 보러가기</GoToProjectsBtn></Link>
                </div>
            </CenteredPageWrapper>
        )
    }
}

export default LandingPage;