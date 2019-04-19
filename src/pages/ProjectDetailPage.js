import React from 'react';
import PageWrapper from "../elements/PageWrapper";
import styled from 'styled-components';
import SectionTitleText from "../texts/SectionTitleText";
import P from "../elements/P";
import SubTitle from "../elements/SubTitle";
import {Button, Card, Carousel} from "antd";
import BigTag from "../components/BigTag";
import ProjectDetailBody from "../elements/ProjectDetailBody";

/**
 * 프로젝트 개별 설명 페이지
 */

const ProjectPageWrapper = styled.div`
  min-height: 600px;
  background: #032b65;
  // xs
    @media (max-width: 575px) {  
     padding: calc(70px + 10px) 0;
    }
    
    // sm
    @media (min-width: 576px) {  
     padding: calc(70px + 10px) 0;
    }
     
    // md
    @media (min-width: 768px) {  
     padding: 0;
    }
     
    // lg
    @media (min-width: 992px) { 
        padding: 0 30px;
    }
     
     // xl
    @media (min-width: 1200px) {  
        padding: 0 100px;
    }
     // xxl
    @media (min-width: 1600px) {  
        padding: 0 300px;
    }
  
`;
const ProjectDetailWrapper = styled.div`
  padding: 25px 25px;
`;

const PlayStoreIcon = () => (
    <img alt="Play store icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIf
    AhkiAAAAAlwSFlzAAADmwAAA5sBPN8HMQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANTSURBVG
    iB7dpJiBxVGMDxyrjEBZXEBRcQBEEUJOohB0dzUdzBg0ZPBj1EJZfgxQXcwIMr6phRjAoGl0v05BAvYrwpaFyRGD1ISNCI
    o6AGo2R0fh7qa/t1p7u6urtmqgL5w0DXq++9/v7z6m01k2WHOIjAajyGE+rOZSTwEo6Jz3dgD9Ziou7chgLz2Ipj43ot/
    sVnWFV3fqXR5kMcH2U3Yy7K38N5dec5EJ1sw7IovymR2Y+pRo8fB7INy+Pe6kQGfsF6HFZ33gfQQwQ+TWRujB5Jad746SPS
    SvbEiLmhhwzM4Ky6HbIsKxTplrkWf/eI2Sdff45rsgh8XkIGfsDt6lp/Soi0ZE6K+GsKZOBjXNxUEfgikbkafxXEzmMzzmyi
    CHyJk6PeVQNk4E88jKOaJgLbcWrUvbKEDOzCmqaJwDc4LepfIZ+5yvABVjRJhM7Z7DrFE0DKftzSJBE6J4CiqTnlfe1jwySOa
    III7MDp0dYq7C2IncGREXtvlO1WxfipQAS+TWQu7SPzTg+JlK04v26RlswZ0eYl+GMIiRZz2Cge17pE4LtEZjJkUon7Srbzq2G
    PCxWL0LnOrNQe2OvkK/4wbGnVr0OEfJ05JfmOOw0v0WJ9d86LuSv9Psuy35PrHVmW7RuxrdlSUdV1wv/MYGm0favYOBo8NXczjw
    3KHgsqlnhTDFDcH2W7cHaUXSQfyIN4F+cO1W8VSryRSDzQdW93InOh/CVGL77G5UMJVCzyeiLxYJ+YVOYCzCb3ZuWny9G3KxVLP
    DQgdo94ZLAirqfEG5uxGFPibfFbxN0l6+wUb15w9NgCFYi8lUgUbTu6+RHXVyYwpsgm7cfp8ZJ19uIeVfbCmCKbxNyOJ0rEz+M1
    sQdbMIaUeDWReLJE/EdYuaACI4i8gCVR56kBsT9hTSu+SSLpFPtIQdwcpsVZflEpIfG8dk88XRC3WSx4tTBAYhpL4ueZPjFf4bL
    aBEqIbEgkXuxx/2f5tuLwuh2yLOsr8lwisbHr3px8W7Gs7tw76CExFQIT8j9dp2zBOXXn3JOSEtuNur1eLJJkn00kXo6y3+RvM
    6p5G7iQRMKPxucJvIJ/oncWfz0YFflprjWwp/EJJuvOa2RwF25zsP0PyiEawH99Z98/XDPrDQAAAABJRU5ErkJggg=="/>
);

const PlayStoreBtn = styled(Button)`
  img {
  width: 27px;
  height: 27px;
  margin: 0 5px 5px 0;
  }
`;

const ProjectDetailCard = styled(Card)`
  margin: 15px 0;
  
  .ant-card-head{
    background: #021d44;
    color: #FFF;
    font-size: 1.5em;
  }
  .ant-card-head-title {
    padding: 12px 0;
  }
  
  .ant-card-body {
    background-color: #fdfdfd;
    line-height: 1.8em;
    font-size: 1.3em;    
  }
`;

const ProjectPicCarousel = styled(Carousel)`
    overflow: hidden;
    max-height: 600px;
    margin: 0 0 20px 0;
`;

const SpecialPointImgWrapper = styled.div`
  text-align: center;
  margin: 0 0 10px 0;
      
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const TravisBtn = styled.a`
  margin: 0 10px;
`;


class ProjectDetailPage extends React.Component {
    render() {
        const {
            projectTitle = "", projectIntro = "", projectBuildProcess = "", projectFunc = [],
            githubLink, playStoreLink, projectSpecialPoints = [], carousel = [], travis
        } = this.props;
        return (
            <PageWrapper>
                <ProjectPageWrapper>
                    <ProjectPicCarousel autoplay>
                        {
                            carousel.map(img => (<img alt="carousel img" src={img}/>))
                        }
                    </ProjectPicCarousel>
                    <ProjectDetailWrapper>
                        <SectionTitleText>{projectTitle}</SectionTitleText>
                        <SubTitle>프로젝트 개요</SubTitle>
                        <div>
                            <P>{projectIntro}</P>
                        </div>

                        <SubTitle>프로젝트 기획</SubTitle>
                        <P>{projectBuildProcess}</P>
                        {
                            projectFunc ? (
                                <div>
                                    <SubTitle>프로젝트 기능</SubTitle>
                                    <div style={{margin: "0 0 20px 0"}}>
                                        {projectFunc.map(func => (<BigTag>{func}</BigTag>))}
                                    </div>
                                </div>
                            ) : ""
                        }

                        <div style={{margin: "0 0 20px 0"}}>
                            {
                                (githubLink || playStoreLink || travis ? <SubTitle>프로젝트 관련 링크</SubTitle> : "")
                            }

                            {
                                githubLink ?
                                    <Button
                                        type="primary"
                                        icon="github"
                                        size="large"
                                        href={githubLink}
                                        target="_blank"
                                    >Github에서 보기</Button> : ""
                            }
                            {
                                playStoreLink ?
                                    <PlayStoreBtn type="primary" size="large" href={playStoreLink} target="_blank">
                                        <PlayStoreIcon/> Play 스토어에서
                                        보기</PlayStoreBtn> : ""
                            }
                            {
                                travis ?
                                    <TravisBtn href={travis.travisLink} rel="noopener noreferrer" target="_blank"><img
                                        alt="travis build" src={travis.buildImg}/></TravisBtn> : ""
                            }
                        </div>
                        {
                            projectSpecialPoints.length !== 0 ? <SubTitle>프로젝트 세부사항</SubTitle> : ""
                        }
                        {
                            projectSpecialPoints.map(({specialPointTitle, specialPointImg, specialPointBody}) => (
                                <ProjectDetailCard
                                    title={specialPointTitle}>
                                    {specialPointImg ?
                                        <SpecialPointImgWrapper>
                                            <img alt="프로젝트 특이사항 이미지" src={specialPointImg}/>
                                        </SpecialPointImgWrapper> : ""
                                    }

                                    <ProjectDetailBody>{specialPointBody}</ProjectDetailBody></ProjectDetailCard>
                            ))
                        }
                    </ProjectDetailWrapper>
                </ProjectPageWrapper>
            </PageWrapper>
        )
    }
}

export default ProjectDetailPage;