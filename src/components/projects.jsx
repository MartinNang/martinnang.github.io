/**
 * Projects page. Fetches project data from json file and loads it dynamically, allowing for filtering and sorting.
 * Currently only sorting alphabetically backwards works.
 */

import React, { useEffect, useState } from "react";
import data from "../assets/data/projects.json"; //project data
import CustomCard from "./card";
import { Row, Col } from "react-bootstrap";

const Projects = () => {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState(data.projects);
  console.log("projects", projects);
  let project = projects[0];
  console.log("1:", projects[0]);

  useEffect(() => {
    // setProjects(data);
    // setLoading(false);
  }, []);
  //   let projectData, uniqueTags, currentProjects;

  //   console.log("loading projects");
  //   console.log(projectData);

  //   uniqueTags = generateUniqueTags(); // list of all tags in all projects with repetitions removed
  //   console.log(uniqueTags);

  //   createButtons(uniqueTags);

  //   currentProjects = projectData;
  //   // displayAllProjects(projectData);

  //   // $("#sort-by-name").click(() => sortProjects(SortProperty.NAME), false);
  //   $("#sort-by-name-desc").click(() => sortProjects(SortProperty.NAME, true));
  //   $("#sort-by-date").click(() => sortProjects(SortProperty.DATE), false);
  //   $("#sort-by-date-desc").click(() => sortProjects(SortProperty.DATE, true));

  //   // find all the unique tags in our data
  //   function generateUniqueTags() {
  //     let uniqueTags = new Set(); // use Set for collecting unique tags
  //     // Iterate over project data to collect tags
  //     projectData.forEach((element) => {
  //       if (element["Tags"]) {
  //         // Check if "Tags" exists
  //         element["Tags"].forEach((tag) => {
  //           uniqueTags.add(tag);
  //         });
  //       }
  //     });

  //     return uniqueTags;
  //   }

  //   // create buttons in our html based on a list of names
  //   function createButtons(list) {
  //     $("#filters").empty();
  //     list.forEach((item) => {
  //       console.log(item);
  //       let newButton = $(
  //         `<button id="filter-button-${item}" class="button btn btn-primary col-4 m-1">${item}</button>`
  //       );
  //       // Add click event listener
  //       newButton.on("click", function () {
  //         console.log(item);
  //         filterProjects(item);
  //       });
  //       console.log(newButton);
  //       $("#filters").append(newButton);
  //     });
  //   }

  //   // when a button is clicked filter by that 'tag'
  //   function filterProjects(tag) {
  //     // Filter projects by selected tag
  //     let filteredProjects = projectData.filter(
  //       (project) => project["Tags"] && project["Tags"].includes(tag)
  //     );

  //     console.log("success ran filterfunction");
  //     currentProjects = filteredProjects;
  //     displayAllProjects(currentProjects);
  //   }

  //   const SortProperty = {
  //     DATE: "Date",
  //     NAME: "Name",
  //   };

  //   function sortProjects(prop, sortBackwards) {
  //     console.log("sorting projects");
  //     let sortedProjects;
  //     switch (prop) {
  //       case SortProperty.DATE:
  //         // TODO implement sorting by date
  //         break;
  //       case SortProperty.NAME:
  //         if (sortBackwards) {
  //           console.log("sorting descending");
  //           sortedProjects = currentProjects.sort((a, b) =>
  //             b["Name"].localeCompare(a["Name"])
  //           );
  //         } else {
  //           console.log(
  //             "name: ",
  //             currentProjects[0]["Name"].localeCompare(
  //               currentProjects[1]["Name"]
  //             )
  //           );
  //           console.log("sorting ascending");
  //           // TODO: fix sorting alphabetically
  //           sortedProjects = currentProjects.sort((a, b) =>
  //             a["Name"].localeCompare(b["Name"])
  //           );
  //         }
  //         break;
  //     }
  //     if (sortedProjects) {
  //       console.log("sorted projects", sortedProjects);
  //       displayAllProjects(sortedProjects);
  //     }
  //   }

  //display the projects in the variable 'projects'
  //   function displayAllProjects(projects) {
  //     $("#projects").empty(); // Clear existing projects before displaying
  //     projects.forEach((item) => {
  //       let newCard = createCard(
  //         item["Image"],
  //         item["Name"],
  //         item["Loop"],
  //         item["Audio"],
  //         new Date(item["Date"]),
  //         item["Description"],
  //         item["Link"],
  //         item["LinkText"],
  //         item["Tags"]
  //       );
  //       $("#projects").append(newCard);
  //     });
  //   }
  // });

  return (
    <div>
      {/* Projects page content */}
      <div class="container">
        <article class="content-wrapper row">
          <h1>Projects</h1>
          <div class="container">
            <div class="row">
              <div id="filters" class="col ms-auto"></div>
              <div class="col-3 col-md-1">
                <div class="dropdown">
                  {/*<button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="sort-dropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Sort by
                  </button>*/}
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1">
                    <li>
                      <a id="sort-by-name" class="dropdown-item">
                        Name
                      </a>
                    </li>
                    <li>
                      <a id="sort-by-name-desc" class="dropdown-item">
                        Name (desc.)
                      </a>
                    </li>
                    {/* <li><a id="sort-by-date" class="dropdown-item" href="#">Date</a></li> */}
                    {/* <li><a id="sort-by-date-desc" class="dropdown-item" href="#">Date (desc.)</a></li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div id="projects" class="row mt-2">
              <h2>{loading ? "loading" : ""}</h2>
              <Row>
                <Col md={6} className={"px-3"}>
                  {projects
                    .filter((value, index) => index % 2 === 0)
                    .map((project, i) => (
                      <Row className={""}>
                        <CustomCard
                          id={i}
                          images={project.Image}
                          name={project.Name}
                          loop={project.Loop}
                          audio={project.Audio}
                          date={new Date(project.Date)}
                          description={project.Description}
                          link={project.Link}
                          linkText={project.LinkText}
                          tags={project.Tags}
                        />
                      </Row>
                    ))}
                </Col>
                <Col md={6} className={"px-3"}>
                  {projects
                    .filter((value, index) => index % 2 === 1)
                    .map((project, i) => (
                      <Row>
                        <CustomCard
                          id={i}
                          images={project.Image}
                          name={project.Name}
                          loop={project.Loop}
                          audio={project.Audio}
                          date={new Date(project.Date)}
                          description={project.Description}
                          link={project.Link}
                          linkText={project.LinkText}
                          tags={project.Tags}
                        />
                      </Row>
                    ))}
                </Col>
              </Row>
            </div>
          </div>
        </article>
      </div>
      <Row></Row>
      <div class="container" style={{ maxWidth: "100%", padding: "0" }}>
        <article
          id="projects-content"
          class="row project-container p-5 pt-0 pb-0 mb-lg-5 pt-4">
          {/* Games panel */}
          <a
            class="project-panel panel-1 col-12 col-lg-5"
            style={{ marginRight: "30px" }}
            href="#/projects/games">
            <div class="panel-header">
              <p>Games</p>
            </div>
          </a>
          {/* Music panel */}
          <a
            class="project-panel panel-2 col-12 col-lg-5"
            style={{ marginRight: "30px" }}
            href="#/projects/music">
            <div class="panel-header">
              <p>Music</p>
            </div>
          </a>
          <a
            class="project-panel panel-3 col-12 col-lg-5"
            href="#/projects/repositories">
            <div class="panel-header">
              <p>Repositories</p>
            </div>
          </a>
        </article>
      </div>

      {/* Background rectangle */}
      <div class="bg-rect" style={{ height: "0px" }}></div>
    </div>
  );
};

export default Projects;

// ,
//     {
//       "Name": "Bias in Machine Learning Algorithms for Automotive Applications and Related Ethical Concerns",
//       "Status": "Complete",
//       "Date": "2022-10-30T00:00:00Z",
//       "Tags": ["Research"],
//       "Link": "/documents/Bias_in_Machine_Learning_Algorithms_for_Automotive_Applications_and_Related_Ethical_Concerns.pdf",
//       "LinkText": "Read the paper",
//       "Description": [
//         "Machine learning (ML) is an ever-expanding field of research that has garnered attention over the past decades for breakthrough performances in the completion of complex tasks that were once thought to be only achievable to humans. With an increasing demand for automated decision systems based on ML, the automotive industry is now preparing for the development and widespread adoption of autonomous vehicles. At the same time, however, a growing number of issues related to bias in the performance of ML algorithms is raising concerns about the current state of fairness in algorithms and whether or not ML algorithms can be trusted to make fair decisions under realistic circumstances, particularly when the safety of a human is at risk.",
//         "This thesis aims to review literature surrounding the topic of algorithmic bias in computer vision (CV) and provide information about possible causes of algorithmic bias, the practical effects of bias in CV and concrete strategies for overcoming bias in automotive applications specifically. In doing so, we delve into relevant works, discuss notable instances of algorithmic bias in practice within recent memory and cover some of the underlying theories in computer vision and machine learning."
//       ]
//     },
