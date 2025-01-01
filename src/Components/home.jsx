/**
 * The portfolio homepage. Features an animated slideshow.
 */

import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Slideshow } from "./slideshow";
import { Link } from "react-router-dom";

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
            <Col class="mt-sm-5 mt-lg-0" xs={12} lg={7}>
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
        <h2>Skills</h2>

        <section>
          <h3>Frontend</h3>
          <div class="skills-wrapper">
            <div class="skill">
              <img src={html5Icon} alt="HTML5 icon." />
              <br />
              <p>HTML5</p>
            </div>
            <div class="skill">
              <img src={bootstrapIcon} alt="Bootstrap icon." />
              <p>Bootstrap</p>
            </div>
            <div class="skill">
              <img src={javascriptIcon} alt="JavaScript icon." />
              <p>Javascript</p>
            </div>
            <div class="skill">
              <img src={cssIcon} alt="CSS3 icon." />
              <p>CSS3</p>
            </div>
            <div class="skill">
              <img src={angularIcon} alt="Angular icon." />
              <p>Angular</p>
            </div>
            <div class="skill">
              <img src={typescriptIcon} alt="TypeScript icon." />
              <p>TypeScript</p>
            </div>
          </div>
        </section>
        <section>
          <h3>Backend</h3>
          <div class="skills-wrapper">
            <div class="skill">
              <img src={javaIcon} width={100} alt="Java icon." />
              <p>Java</p>
            </div>
            <div class="skill">
              <img src={xmlIcon} width={100} alt="XML icon." />
              <p>XML (JAXB)</p>
            </div>
            <div class="skill">
              <img src={springIcon} width={100} alt="Spring icon." />
              <p>Spring</p>
            </div>
            <div class="skill">
              <img src={mavenIcon} width={100} alt="Maven icon." />
              <p>Maven</p>
            </div>
            <div class="skill">
              <img src={seleniumIcon} width={100} alt="Selenium icon." />
              <p>Selenium</p>
            </div>
          </div>
        </section>
      </article>

      {/* Experience */}
      <div class="experience-wrapper">
        {/* Work */}
        <article class="experience-section work-experience">
          <h2>
            <Link to="/experience#work-experience">Work Experience</Link>
          </h2>
          <div class="experience-section-body">
            <div class="experience-subsection work-subsection">
              <img src={doxeeLogo} width={80} alt="Doxee logo." />
              <div>
                <p class="subsection-year">2022 - Present</p>
                <p class="subsection-name">Developer</p>
                <p class="subsection-organization">Doxee</p>
              </div>
            </div>
            <div class="experience-subsection work-subsection">
              <img src={bawagLogo} width={80} alt="BAWAG P.S.K. logo." />
              <div>
                <p class="subsection-year">Jul 2019 - Sep 2019</p>
                <p class="subsection-name">Test Automation Intern</p>
                <p class="subsection-organization">BAWAG P.S.K.</p>
              </div>
            </div>
            <div class="experience-subsection work-subsection">
              <img src={bawagLogo} width={80} alt="BAWAG P.S.K. logo." />
              <div>
                <p class="subsection-year">Jul 2018 - Sep 2018</p>
                <p class="subsection-name">Digital Banking Intern</p>
                <p class="subsection-organization">BAWAG P.S.K.</p>
              </div>
            </div>
          </div>
        </article>
        {/* Education */}
        <article class="experience-section education">
          <h2>
            <Link to="/experience#education-experience">Education</Link>
          </h2>
          <div class="experience-section-body">
            <div class="experience-subsection education-subsection">
              {/* 
                    Logo source: 
                    https://logowik.com/trinity-college-dublin-logo-vector-svg-pdf-ai-eps-cdr-free-download-15382.html
                     */}
              <img
                src={tcdLogo}
                width={80}
                alt="Trinity College Dublin logo."
              />
              <div>
                <p class="subsection-year">2024 - Present</p>
                <p class="subsection-name">Interactive Digital Media M.Sc.</p>
                <p class="subsection-organization">Trinity College Dublin</p>
              </div>
            </div>
            <div class="experience-subsection education-subsection">
              <img
                src={tuViennaLogo}
                width={80}
                alt="University of Technology Vienna logo."
              />
              <div>
                <p class="subsection-year">2017 - 2022</p>
                <p class="subsection-name">
                  Software and Information Engineering B.Sc.
                </p>
                <p class="subsection-organization">TU Wien</p>
              </div>
            </div>
          </div>
        </article>
      </div>

      <Slideshow interval={5000} images={[slideImg0, slideImg1, slideImg2]} />

      <div class="bg-rect"></div>
    </div>
  );
};

export default Home;
