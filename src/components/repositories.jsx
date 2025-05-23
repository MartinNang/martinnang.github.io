/**
 * Repositories pages. Displays all public GitHub repositories on my personal profile using the card component.
 */

import React, { useEffect, useState } from "react";
import $ from "jquery";
import CustomCard from "./card";

const Repositories = () => {
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    $.ajax({
      type: "GET",
      url: "https://api.github.com/users/MartinNang/repos",
      success: function (data) {
        console.log("success", data);
        setRepos(data);
        setLoading(false);
      },
      error: function (data) {
        //handle the error
        console.log("failed to fetch git repos");
      },
    });
  }, []);

  console.log("repos", repos);

  return (
    // Github repositories page
    <article class="content-wrapper">
      <h1>Repositories</h1>

      <section id="github-repos" class="container">
        <div>
          <h2>{loading ? "loading" : ""}</h2>
          {repos
            ? repos.map((repo, i) => (
                <CustomCard
                  id={i}
                  image={null}
                  name={repo.name}
                  loop={false}
                  audio={null}
                  date={new Date(repo.created_at)}
                  description={repo.description}
                  link={repo.clone_url}
                  linkText={"Go to Repo"}
                  tags={null}
                />
              ))
            : ""}
        </div>
      </section>
    </article>
  );
};

export default Repositories;
