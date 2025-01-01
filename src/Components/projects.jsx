/**
 * Projects page. Fetches project data from json file and loads it dynamically, allowing for filtering and sorting.
 * Currently only sorting alphabetically backwards works.
 */

import React, { useEffect } from "react";
import $ from "jquery";
import createCard from "../assets/js/cards.js";
import data from "../assets/data/projects.json"; //project data

const Projects = () => {
  useEffect(() => {
    let projectData, uniqueTags, currentProjects;

    console.log("loading projects");
    projectData = data.projects;
    console.log(projectData);

    uniqueTags = generateUniqueTags(); // list of all tags in all projects with repetitions removed
    console.log(uniqueTags);

    createButtons(uniqueTags);

    currentProjects = projectData;
    displayAllProjects(projectData);

    // $("#sort-by-name").click(() => sortProjects(SortProperty.NAME), false);
    $("#sort-by-name-desc").click(() => sortProjects(SortProperty.NAME, true));
    $("#sort-by-date").click(() => sortProjects(SortProperty.DATE), false);
    $("#sort-by-date-desc").click(() => sortProjects(SortProperty.DATE, true));

    // find all the unique tags in our data
    function generateUniqueTags() {
      let uniqueTags = new Set(); // use Set for collecting unique tags
      // Iterate over project data to collect tags
      projectData.forEach((element) => {
        if (element["Tags"]) {
          // Check if "Tags" exists
          element["Tags"].forEach((tag) => {
            uniqueTags.add(tag);
          });
        }
      });

      return uniqueTags;
    }

    // create buttons in our html based on a list of names
    function createButtons(list) {
      $("#filters").empty();
      list.forEach((item) => {
        console.log(item);
        let newButton = $(
          `<button id="filter-button-${item}" class="button btn btn-primary col-4 m-1">${item}</button>`
        );
        // Add click event listener
        newButton.on("click", function () {
          console.log(item);
          filterProjects(item);
        });
        console.log(newButton);
        $("#filters").append(newButton);
      });
    }

    // when a button is clicked filter by that 'tag'
    function filterProjects(tag) {
      // Filter projects by selected tag
      let filteredProjects = projectData.filter(
        (project) => project["Tags"] && project["Tags"].includes(tag)
      );

      console.log("success ran filterfunction");
      currentProjects = filteredProjects;
      displayAllProjects(currentProjects);
    }

    const SortProperty = {
      DATE: "Date",
      NAME: "Name",
    };

    function sortProjects(prop, sortBackwards) {
      console.log("sorting projects");
      let sortedProjects;
      switch (prop) {
        case SortProperty.DATE:
          // TODO implement sorting by date
          break;
        case SortProperty.NAME:
          if (sortBackwards) {
            console.log("sorting descending");
            sortedProjects = currentProjects.sort((a, b) =>
              b["Name"].localeCompare(a["Name"])
            );
          } else {
            console.log(
              "name: ",
              currentProjects[0]["Name"].localeCompare(
                currentProjects[1]["Name"]
              )
            );
            console.log("sorting ascending");
            // TODO: fix sorting alphabetically
            sortedProjects = currentProjects.sort((a, b) =>
              a["Name"].localeCompare(b["Name"])
            );
          }
          break;
      }
      if (sortedProjects) {
        console.log("sorted projects", sortedProjects);
        displayAllProjects(sortedProjects);
      }
    }

    //display the projects in the variable 'projects'
    function displayAllProjects(projects) {
      $("#projects").empty(); // Clear existing projects before displaying
      projects.forEach((item) => {
        let newCard = createCard(
          item["Image"],
          item["Name"],
          item["Loop"],
          item["Audio"],
          new Date(item["Date"]),
          item["Description"],
          item["Link"],
          item["LinkText"],
          item["Tags"]
        );
        $("#projects").append(newCard);
      });
    }
  });

  return (
    <div>
      {/* Projects page content */}
      <div class="container" style={{ maxWidth: "100%", padding: "0" }}>
        <article
          id="projects-content"
          class="row project-container p-5 pt-0 pb-0 mb-lg-5">
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
      <div class="container">
        <article class="content-wrapper row" style={{ marginTop: "-150px" }}>
          <h1>Projects</h1>
          <div class="container">
            <div class="row">
              <div id="filters" class="col ms-auto"></div>
              <div class="col-3 col-md-1">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="sort-dropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Sort by
                  </button>
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
            <div id="projects" class="row mt-2"></div>
          </div>
        </article>
      </div>
      {/* Background rectangle */}
      <div class="bg-rect" style={{ height: "450px" }}></div>
    </div>
  );
};

export default Projects;
