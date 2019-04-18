import React from 'react';
import {Card} from "antd";
import styled from 'styled-components'
import TechImage from '../data/TechImage'
import TechBadgeSm from "./TechBadgeSm";
import TagWMar from "./TagWMar";

const {Meta} = Card;

const CardWrapper = styled(Card)`
  min-width: 200px;
  max-width: 320px;
  margin: 10px 5px;
`;

const TechStackWrapper = styled.div`
  margin: 10px 0;
`;

const CustMeta = styled(Meta)`
  height: 140px;
`;


const ProjectCard = ({projectTitle, imgUrl, projectDetail = "", projectTags = [], usedTechs = [], projectImg = ""}) => {
    return (
        <CardWrapper
            hoverable
            cover={<img alt={projectTitle} src={projectImg}/>}
        >
            <CustMeta
                title={projectTitle}
                description={projectDetail}
            />
            <TechStackWrapper>
                {usedTechs.map(tech => (<TechBadgeSm imgSrc={TechImage[tech].img} imgTag={TechImage[tech].name}/>))}
            </TechStackWrapper>
            <div>
                {
                    projectTags.map(tag => (<TagWMar>{tag}</TagWMar>))
                }
            </div>
        </CardWrapper>
    )
};


export default ProjectCard;