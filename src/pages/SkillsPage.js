import React from 'react';
import SectionTitleText from "../texts/SectionTitleText";
import styled from "styled-components";
import SkillBadge from "../components/SkillBadge";
import GenericPageWrapper from "../components/GenericPageWrapper";

const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  
`;

class SkillsPage extends React.Component {

    render() {
        return (
            <GenericPageWrapper>
                <div>
                    <SectionTitleText>Skills</SectionTitleText>
                    <SkillsWrapper>
                        <SkillBadge
                            skillName="Python"
                            imgUrl="https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/skill-logo/python.png"
                            tags={["주언어", "백앤드구축"]}
                        />
                        <SkillBadge
                            skillName="Java"
                            imgUrl="https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/skill-logo/java.png"
                            tags={["자주사용", "기존서버수정"]}
                        />
                        <SkillBadge
                            skillName="JavaScript"
                            imgUrl="https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/skill-logo/javascript.png"
                            tags={["관심 많음", "ES6,Babel선호"]}
                        />
                        <SkillBadge
                            skillName="C#"
                            imgUrl="https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/skill-logo/c%23.png"
                            tags={["공용PC 관리프로그램", "WPF", "초급"]}
                        />
                        <SkillBadge
                            skillName="NodeJS"
                            imgUrl="https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/skill-logo/nodejs.png"
                            tags={["React동반사용", "개발경험 있음", "socket.io"]}
                        />
                        <SkillBadge
                            skillName="React.js"
                            imgUrl="https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/skill-logo/react.png"
                            tags={["포트폴리오", "관심 많음", "개발경험 많음"]}
                        />
                        <SkillBadge
                            skillName="Redux"
                            imgUrl="https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/skill-logo/redux.png"
                            tags={["React동반사용"]}
                        />
                        <SkillBadge
                            skillName="jQuery"
                            imgUrl="https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/skill-logo/jquery.png"
                            tags={["소규모 프로젝트 선호"]}
                        />
                        <SkillBadge
                            skillName="Webpack"
                            imgUrl="https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/skill-logo/webpack.png"
                            tags={["직접설정하여 사용"]}
                        />
                        <SkillBadge
                            skillName="Django"
                            imgUrl="https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/skill-logo/django.png"
                            tags={["주언어", "백앤드구축"]}
                        />
                        <SkillBadge
                            skillName="Flask"
                            imgUrl="https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/skill-logo/flask.png"
                            tags={["공용PC 관리프로그램", "REST API"]}
                        />
                        <SkillBadge
                            skillName="WPF"
                            imgUrl="https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/skill-logo/wpf.png"
                            tags={["공용PC 관리프로그램", "초급"]}
                        />
                        <SkillBadge
                            skillName="AWS"
                            imgUrl="https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/skill-logo/aws.png"
                            tags={["Migration진행", "FMS", "EC2", "S3"]}
                        />
                        <SkillBadge
                            skillName="PostgreSQL"
                            imgUrl="https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/skill-logo/postgresql.png"
                            tags={["주 RDBMS", "공용PC 관리프로그램"]}
                        />
                        <SkillBadge
                            skillName="MySQL"
                            imgUrl="https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/skill-logo/mysql.png"
                            tags={["FMS"]}
                        />
                        <SkillBadge
                            skillName="Redis"
                            imgUrl="https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/skill-logo/redis.png"
                            tags={["공용PC 관리프로그램", "실시간 세션관리"]}
                        />
                        <SkillBadge
                            skillName="CentOS"
                            imgUrl="https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/skill-logo/centos.png"
                            tags={["프로덕션 서비스 세팅가능", "초급"]}
                        />
                        <SkillBadge
                            skillName="Nginx"
                            imgUrl="https://s3.ap-northeast-2.amazonaws.com/yhware-portfolio/skill-logo/nginx.png"
                            tags={["선호 웹서버", "로드밸런싱 경험"]}
                        />
                    </SkillsWrapper>

                </div>
            </GenericPageWrapper>
        )
    }
}

export default SkillsPage;