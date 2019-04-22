import React from 'react';
import styled from 'styled-components';
import TagWMar from "./TagWMar";

const Wrapper = styled.div`
  width: 180px;
  min-height: 200px;
  padding: 5px 5px;
  margin: 10px 5px;
  background: #fff;
  text-align: center;
  border-radius: 10px;
  box-shadow: 1px 1px 5px 1px rgba(117,117,117,1);
  -webkit-box-shadow: 1px 1px 5px 1px rgba(117,117,117,1);
  -moz-box-shadow: 1px 1px 5px 1px rgba(117,117,117,1);
  
    // xxs
    @media (max-width: 425px) {  
      width: 45%;
      margin: 5px 5px;
    }
    // xs
    @media (min-width: 575px) {  
      width: 140px;
      margin: 5px 5px;
    }
  
`;

const SkillImage = styled.img`
  max-width: 75px;
  max-height: 75px;
  margin: 20px 10px 10px 10px;
`;

const SkillName = styled.p`
  font-size: 1.2em;
  font-weight: 600;
  margin: 0 0 10px 0;
`;

const TagWrapper = styled.div`
    display: flex;
  flex-wrap: wrap;
`;


const SkillBadge = ({imgUrl, skillName, tags}) => {
    return (
        <Wrapper>
            <SkillImage src={imgUrl}/>
            <SkillName>{skillName}</SkillName>
            <TagWrapper>
                {tags.map(tag => (<TagWMar>{tag}</TagWMar>))}
            </TagWrapper>
        </Wrapper>
    )
};

export default SkillBadge;