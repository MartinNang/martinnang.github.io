import { createCard } from "./cards.js";

const ghToken = process.env.GH_TOKEN;

// load all personal public GitHub repositories
$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "https://api.github.com/users/MartinNang/repos",
    beforeSend: function (xhr) {
      xhr.setRequestHeader("Authorization", `token ${ghToken}`);
    },
    success: function (repos) {
      //set your variable to the result

      let container = $("#github-repos");

      for (let repo of repos) {
        console.log("repo", repo);
        let newCard = createCard(
          null,
          repo.name,
          false,
          null,
          new Date(repo.created_at),
          [repo.description],
          repo.clone_url,
          "Go to project",
          null
        );
        container.append(newCard);
      }
    },
    error: function (repos) {
      //handle the error
      console.log("error");
    },
  });
});
