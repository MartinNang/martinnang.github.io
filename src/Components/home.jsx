/**
 * The portfolio homepage. Features an animated slideshow.
 */

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Slideshow } from "./slideshow";
import { Link } from "react-router-dom";
import Skill from "./skill";

// Icons
import profile from "../assets/img/Profile.jpeg";
import html5Icon from "../assets/img/html5-01-svgrepo-com.svg";
import bootstrapIcon from "../assets/img/bootstrap-fill-svgrepo-com.svg";
import javascriptIcon from "../assets/img/javascript-155-svgrepo-com.svg";
import cssIcon from "../assets/img/css3-02-svgrepo-com.svg";
import angularIcon from "../assets/img/angular-svgrepo-com.svg";
import typescriptIcon from "../assets/img/typescript-16-svgrepo-com.svg";
import javaIcon from "../assets/img/java-svgrepo-com.svg";
import xmlIcon from "../assets/img/xml-document-svgrepo-com.svg";
import springIcon from "../assets/img/spring-svgrepo-com.svg";
import mavenIcon from "../assets/img/apachemaven-svgrepo-com.svg";
import reactIcon from "../assets/img/react-16-svgrepo-com.svg";
import tomcatIcon from "../assets/img/tomcat-svgrepo-com.svg";
import seleniumIcon from "../assets/img/selenium-svgrepo-com.svg";

// Company logos
import doxeeLogo from "../assets/img/doxee_logo.png";
import bawagLogo from "../assets/img/bawag_logo.svg";
import tcdLogo from "../assets/img/tcd_logo.svg";
import tuViennaLogo from "../assets/img/TU_Wien-Logo.svg";

// Slideshow images
import slideImg0 from "../assets/img/homepage_image0.jpg";
import slideImg1 from "../assets/img/homepage_image1.jpg";
import slideImg2 from "../assets/img/homepage_image2.png";

const Home = () => {
  return (
    <div>
      {/* Introductory paragraph */}
      <article class="intro">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} lg={5}>
              <img
                id="profile"
                width={335}
                height={335}
                src={profile}
                alt="Martin Nangole in front of a metal gate with some greenery in the background."
              />
            </Col>
            <Col className="mt-5 mt-lg-0" xs={12} lg={7}>
              <div class="intro-text">
                <h1>Hi there! 👋🏼</h1>
                <p>
                  I'm a software developer who is looking to work on{" "}
                  <b>creative</b> and <b>innovative</b> projects.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </article>
      <hr id="intro-seperator" />

      {/* Skills */}
      <article class="content-wrapper">
        <section>
          <h2 className="ms-5">Skills</h2>
          <Container>
            <Row className="ms-5 mt-4 justify-content-center">
              <h3>Frontend</h3>
            </Row>
            <Row className="mt-4">
              <Skill name={"HTML5"} icon={html5Icon}></Skill>
              <Skill name={"Bootstrap"} icon={bootstrapIcon}></Skill>
              <Skill name={"JavaScript"} icon={javascriptIcon}></Skill>
              <Skill name={"CSS3"} icon={cssIcon}></Skill>
              <Skill name={"React"} icon={reactIcon}></Skill>
              <Skill name={"Angular"} icon={angularIcon}></Skill>
              <Skill name={"TypeScript"} icon={typescriptIcon}></Skill>
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row className="ms-5 mt-4">
              <h3>Backend</h3>
            </Row>
            <Row className="mt-4">
              <Skill name={"Java"} icon={javaIcon}></Skill>
              <Skill name={"XML"} icon={xmlIcon}></Skill>
              <Skill name={"Spring"} icon={springIcon}></Skill>
              <Skill name={"Maven"} icon={mavenIcon}></Skill>
              <Skill name={"Tomcat"} icon={tomcatIcon}></Skill>
              <Skill name={"Selenium"} icon={seleniumIcon}></Skill>
            </Row>
          </Container>
          <div class="skills-wrapper"></div>
        </section>
      </article>

      {/* Experience */}
      <div class="experience-wrapper">
        <Container>
          <Row>
            <Col>
              {/* Work */}
              <article class="experience-section work-experience">
                <h2>
                  <Link to="/experience#work-experience">Work Experience</Link>
                </h2>

                <Container>
                  <Row>
                    <Col xs={12}>
                      <Container className="experience-subsection work-subsection p-3">
                        <Row className="align-items-center">
                          <Col xs={12} lg={4}>
                            <img src={doxeeLogo} width={80} alt="Doxee logo." />
                          </Col>
                          <Col xs={12} lg={8}>
                            <div>
                              <p class="subsection-year">2022 - Present</p>
                              <p class="subsection-name">Developer</p>
                              <p class="subsection-organization">Doxee</p>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </Col>
                    <Col xs={12}>
                      <Container className="experience-subsection work-subsection mt-2 p-3">
                        <Row className="align-items-center">
                          <Col xs={12} lg={4}>
                            <img
                              src={bawagLogo}
                              width={80}
                              alt="BAWAG P.S.K. logo."
                            />
                          </Col>
                          <Col xs={12} lg={8}>
                            <div>
                              <p class="subsection-year">Jul 2019 - Sep 2019</p>
                              <p class="subsection-name">
                                Test Automation Intern
                              </p>
                              <p class="subsection-organization">
                                BAWAG P.S.K.
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </Col>
                    <Col xs={12}>
                      <Container className="experience-subsection work-subsection mt-2 p-3">
                        <Row className="align-items-center">
                          <Col xs={12} lg={4}>
                            <img
                              src={bawagLogo}
                              width={80}
                              alt="BAWAG P.S.K. logo."
                            />
                          </Col>
                          <Col xs={12} lg={8}>
                            <div>
                              <p class="subsection-year">Jul 2018 - Sep 2018</p>
                              <p class="subsection-name">
                                Digital Banking Intern
                              </p>
                              <p class="subsection-organization">
                                BAWAG P.S.K.
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </Col>
                  </Row>
                </Container>
              </article>
            </Col>
            <Col>
              {/* Education */}
              <article class="experience-section education">
                <h2>
                  <Link to="/experience#education-experience">Education</Link>
                </h2>
                <Container>
                  <Row>
                    <Col xs={12}>
                      <Container className="experience-subsection education-subsection p-3">
                        {/* 
                    Logo source: 
                    https://logowik.com/trinity-college-dublin-logo-vector-svg-pdf-ai-eps-cdr-free-download-15382.html
                     */}
                        <Row className="align-items-center">
                          <Col xs={12} lg={6}>
                            <img
                              src={tcdLogo}
                              width={80}
                              alt="Trinity College Dublin logo."
                            />
                          </Col>
                          <Col xs={12} lg={6}>
                            <div>
                              <p class="subsection-year">2024 - Present</p>
                              <p class="subsection-name">
                                Interactive Digital Media M.Sc.
                              </p>
                              <p class="subsection-organization">
                                Trinity College Dublin
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </Col>
                    <Col xs={12}>
                      <Container className="experience-subsection education-subsection mt-2 p-3">
                        <Row className="align-items-center">
                          <Col xs={12} lg={6}>
                            <img
                              src={tuViennaLogo}
                              width={80}
                              alt="University of Technology Vienna logo."
                            />
                          </Col>
                          <Col xs={12} lg={6}>
                            <div>
                              <p class="subsection-year">2017 - 2022</p>
                              <p class="subsection-name">
                                Software and Information Engineering B.Sc.
                              </p>
                              <p class="subsection-organization">TU Wien</p>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </Col>
                  </Row>
                </Container>
              </article>
            </Col>
          </Row>
        </Container>
      </div>

      <Slideshow interval={5000} images={[slideImg0, slideImg1, slideImg2]} />

      <div class="bg-rect"></div>
    </div>
  );
};

export default Home;
