/**
 * Work Experience and Education page
 */
import React from "react";
import { Chrono } from 'react-chrono';
import { Container, Row, Col } from 'react-bootstrap';

const Experience = () => {
  const items = [
    {
      title: 'September 2024 - September 2025',
      cardTitle: 'Interactive Digital Media MSc.',
      url: 'https://www.tcd.ie/',
      cardSubtitle:
          'Trinity College Dublin, Dublin, Ireland',
      cardDetailedText:
          `<ul style="background-color: #020203">
              <li>
                Relevant coursework: Visual Computing and Design, Programming for Digital Media, Contextual Media, Interactive Narratives, Audio and Sensor Technologies.
              </li>
            </ul>`,
    },
    {
      title: 'November 2022 - Present',
      cardTitle: 'Developer',
      url: 'https://www.doxee.com',
      cardSubtitle:
          'Infinica a Doxee Company, Vienna, Austria',
      cardDetailedText:
          `<ul>
              <li>
                Added SFTP client support to Resource Access Layer,
                including listing, moving, deleting and renaming resources
                as well as retrieving properties using Apache MINA SSHD.
              </li>
              <li>
                Used JAXB and XSD to specify and partially implement a
                font configuration XML file for configuring custom font
                files accross multiples projects for Doxee Business
                Designer and Template Designer using Apache FOP.
              </li>
              <li>
                Developed and maintained REST-API using Java, XML, and
                XPath for Design and Authoring tools Doxee Business
                Designer, Template Designer and Composer.
              </li>
              <li>
                Implemented PDF/A concatenation and validation modules in
                Doxee Process Engine using Apache PDFBox and veraPDF.
              </li>
              <li>
                Developed features for a conversion project migrating new
                customers.
              </li>
              <li>
                Working under agile project management with international
                colleagues and partner firms.
              </li>
            </ul>`,
    },
    {
      title: 'September 2017 - October 2022',
      cardTitle: 'Software and Information Engineering BSc.',
      url: 'https://www.tuwien.at/',
      cardSubtitle:
          'University of Technology Vienna, Vienna, Austria',
      cardDetailedText:
          `<ul>
              <li>
                Relevant coursework: Software Engineering and Project Management, Interface and Interaction Design, Distributed Systems, Introduction to Artificial Intelligence, Pilots in Mobile Interaction: User-centered Interaction Research and Evaluation
              </li>
              <li>
                Thesis: "Bias in Machine Learning Algorithms for Automotive Applications and Related Ethical Concerns" (ECTS-Grade A).
              </li>
            </ul>`,

    },
    {
      title: 'July - August 2019',
      cardTitle: 'Quality Management Intern',
      url: 'https://www.bawag.at/',
      cardSubtitle:
          'BAWAG P.S.K., Vienna, Austria',
      cardDetailedText:
          `<ul>
              <li>
                Set up Appium test automation library for end-to-end testing
                of the BAWAG Banking App on Android and iOS using Java.
              </li>
              <li>
                Tested software and identified bugs within a tightly
                controlled sandbox environment before production release
              </li>
              <li>
                Developed courteous and effective working relationships with
                coworkers, senior developers, and marketing.
              </li>
            </ul>`,

    },
    {
      title: 'July - August 2018',
      cardTitle: 'Digital Banking Intern',
      url: 'https://www.bawag.at/',
      cardSubtitle:
          'BAWAG P.S.K., Vienna, Austria',
      cardDetailedText:
          `<ul>
              <li>
                Contributed to test automation library for a web application
                by creating and implementing test cases in Selenium,
                Cucumber, and Java.
              </li>
              <li>
                Created spreadsheets using Microsoft Excel for daily and
                weekly manual testing and reporting.
              </li>
              <li>
                Regularly completed automated testing and analysis within
                SCRUM workflow.
              </li>
            </ul>`,

    },
    // ... more items
  ];

  const customDarkTheme = {
    // Base colors
    cardBgColor: '#020203',
    toolbarBgColor: '#020203',
    toolbarBtnBgColor: '#020203',
    cardDetailsBackGround: '#020203',

    cardTitleColor: '#ffffff',
    cardSubtitleColor: '#ffffff',
    cardDetailsColor: '#ffffff',
    titleColor: '#000000',

    primaryTextColor: '#ffffff',
    secondaryTextColor: '#ffffff',
    cardForeColor: 'violet',
    timelineBgColor: '#000000',

    primary: '#295b4e',
    secondary: '#295b4e',
    titleColorActive: 'White',

    // Enhanced dark mode properties
    iconColor: '#020203', // Bright blue for icons
    buttonHoverBgColor: '#718096', // Gray hover
    buttonActiveBgColor: '#ed8936', // Orange active state
    buttonActiveIconColor: '#1a202c', // Dark icon on orange

    // Borders and effects
    buttonBorderColor: 'rgba(255, 255, 255, 0.2)',
    buttonHoverBorderColor: '#63b3ed',
    shadowColor: '#020203',
    glowColor: 'rgba(237, 137, 54, 0.4)',

    // Search and dark toggle
    searchHighlightColor: 'rgba(99, 179, 237, 0.3)',
    darkToggleActiveBgColor: '#2b6cb0',
    darkToggleActiveIconColor: '#020203',
  };

  const customFontSizes = {
    cardSubtitle: '1rem',
        cardText: '0.9rem',
        cardTitle: '1.5rem',
        title: '1.6rem',
  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2>

            </h2>
          </Col>
          <Col>

          </Col>
        </Row>
      </Container>

      <Chrono items={items} fontSizes={customFontSizes} theme={customDarkTheme} timelinePointColor={"#ffffff"} mode={"VERTICAL_ALTERNATING"} disableToolbar={true} parseDetailsAsHTML={true} itemWidth={150} enableDarkToggle className={"m-0 p-0"} timelinePointDimension={30} lineWidth={6}/>

      <div class="content-wrapper p-0 px-4 mb-0">

        {/*<h1 id="work-experience">Work Experience</h1>

        <Accordion defaultActiveKey="0" className={"bg-dark text-white"}>
          <Accordion.Item eventKey="0" className={"bg-dark text-white"}>
            <Accordion.Header className={"bg-dark text-white"}>Developer · <i>Infinica a Doxee Company, Vienna, Austria</i> ·{" "}
              <span class="experience-subsection-year">
                November 2022 - Present
              </span></Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  Added SFTP client support to Resource Access Layer,
                  including listing, moving, deleting and renaming resources
                  as well as retrieving properties using Apache MINA SSHD.
                </li>
                <li>
                  Used JAXB and XSD to specify and partially implement a
                  font configuration XML file for configuring custom font
                  files accross multiples projects for Doxee Business
                  Designer and Template Designer using Apache FOP.
                </li>
                <li>
                  Developed and maintained REST-API using Java, XML, and
                  XPath for Design and Authoring tools Doxee Business
                  Designer, Template Designer and Composer.
                </li>
                <li>
                  Implemented PDF/A concatenation and validation modules in
                  Doxee Process Engine using Apache PDFBox and veraPDF.
                </li>
                <li>
                  Developed features for a conversion project migrating new
                  customers.
                </li>
                <li>
                  Working under agile project management with international
                  colleagues and partner firms.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Quality Management Intern · <i>BAWAG P.S.K., Vienna, Austria</i> ·{" "}
              <span>July 2019 - August 2019</span></Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  Set up Appium test automation library for end-to-end testing
                  of the BAWAG Banking App on Android and iOS using Java.
                </li>
                <li>
                  Tested software and identified bugs within a tightly
                  controlled sandbox environment before production release
                </li>
                <li>
                  Developed courteous and effective working relationships with
                  coworkers, senior developers, and marketing.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Digital Banking Intern · <i>BAWAG P.S.K., Vienna, Austria</i> ·{" "}
              <span>July 2018 - August 2018</span></Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  Contributed to test automation library for a web application
                  by creating and implementing test cases in Selenium,
                  Cucumber, and Java.
                </li>
                <li>
                  Created spreadsheets using Microsoft Excel for daily and
                  weekly manual testing and reporting.
                </li>
                <li>
                  Regularly completed automated testing and analysis within
                  SCRUM workflow.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <h1 id="education-experience">Education</h1>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Interactive Digital Media MSc. · <i>Trinity College Dublin</i> ·
              <span>September 2024 - September 2025 (expected)</span></Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  Relevant coursework: Visual Computing and Design,
                  Programming for Digital Media, Contextual Media,
                  Interactive Narratives, Audio and Sensor Technologies.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Software and Information Engineering BSc. · <i>TU Wien</i> ·
              <span>September 2017 - October 2022</span></Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  Relevant coursework: Software Engineering and Project
                  Management, Interface and Interaction Design, Distributed
                  Systems, Introduction to Artificial Intelligence, Pilots in
                  Mobile Interaction: User-centered Interaction Research and
                  Evaluation
                </li>
                <li>
                  Thesis: "Bias in Machine Learning Algorithms for Automotive
                  Applications and Related Ethical Concerns" (ECTS-Grade A).
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>*/}
      </div>

      <div class="bg-rect exp-rect"></div>
    </div>
  );
};

export default Experience;
