import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './hamburger.css';
import "antd/dist/antd.css";
import './App.css';
import ProfilePage from "./pages/ProfilePage";
import LandingPage from "./pages/LandingPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import Projects from "./data/Projects";
import {Col, Row} from "antd";
import styled from "styled-components";
import NavigationBar from "./components/NavigationBar";
import MobileNav from "./components/MobileNav";

const RowCust = styled(Row)`
  background: #021D44;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StickyNavBar = styled(Col)`
  position: fixed;
    /* align-self: flex-start; */
    top: 0;
    left: 0;
`;


const NavBarOuterWrapper = styled.div`
  height: 100vh;
  background: #012963;
  padding: 30px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobileMenuOpen: false,
        }
    }

    onHamburgerClick = () => {
        this.setState({
            isMobileMenuOpen: !this.state.isMobileMenuOpen
        });
    };

    onMobileMenuClick = () => {
        this.onHamburgerClick();
    };


    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <RowCust>
                        <MobileNav
                            isMobileMenuOpen={this.state.isMobileMenuOpen}
                            onHamburgerClickHandler={this.onHamburgerClick}
                            onMobileMenuClickHandler={this.onMobileMenuClick}
                        />
                        <StickyNavBar xs={0} sm={0} md={7} lg={5} xl={4}>
                            <NavBarOuterWrapper>
                                <NavigationBar/>
                            </NavBarOuterWrapper>
                        </StickyNavBar>
                        <Col
                            xs={{span: 24, offset: 0}}
                            sm={{span: 24, offset: 0}}
                            md={{span: 17, offset: 7}}
                            lg={{span: 19, offset: 5}}
                            xl={{span: 20, offset: 4}}
                        >
                            <Route exact path="/" component={LandingPage}/>
                            <Route path="/profile" exact component={ProfilePage}/>
                            <Route path="/skills" exact component={SkillsPage}/>
                            <Route path="/projects" exact component={ProjectsPage}/>
                            <Route
                                exact
                                key="internetcafe"
                                path="/projects/internetcafe"
                                render={props => <ProjectDetailPage {...Projects[0]} />}
                            />
                            <Route
                                exact
                                key="fmsandroid"
                                path="/projects/fmsandroid"
                                render={props => <ProjectDetailPage {...Projects[1]} />}
                            />
                            <Route
                                exact
                                key="fmsfront"
                                path="/projects/fmsfront"
                                render={props => <ProjectDetailPage {...Projects[2]} />}
                            />
                            <Route
                                exact
                                key="portfolio"
                                path="/projects/portfolio"
                                render={props => <ProjectDetailPage {...Projects[3]} />}
                            />
                        </Col>
                    </RowCust>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
