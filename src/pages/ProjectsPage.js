import React from 'react';
import SectionTitleText from "../texts/SectionTitleText";
import styled from 'styled-components'
import ProjectCard from "../components/ProjectCard";
import Projects from "../data/Projects"
import {Link} from "react-router-dom";
import GenericPageWrapper from "../components/GenericPageWrapper";

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 50vw;
  max-width: 95vw;
`;

class ProjectsPage extends React.Component {
    render() {
        return (
            <GenericPageWrapper>
                <SectionTitleText>Projects</SectionTitleText>
                <ProjectsWrapper>
                    {
                        Projects.map(({projectTitle, projectDetail, usedTechs, projectTags, projectImg, link}) => (
                            <Link to={link}>
                                <ProjectCard
                                    hoverable
                                    projectTitle={projectTitle}
                                    projectDetail={projectDetail}
                                    usedTechs={usedTechs}
                                    projectTags={projectTags}
                                    projectImg={projectImg}
                                />
                            </Link>
                        ))
                    }
                </ProjectsWrapper>
            </GenericPageWrapper>
        )
    }
}

export default ProjectsPage;