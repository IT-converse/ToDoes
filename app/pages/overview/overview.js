var Observable = require("data/observable");
const httpModule = require("http");
const frameModule = require("ui/frame");

// We can use auth-tokens via header

exports.onLoaded = function(args) {
  let page = args.object;
  let projects = new Observable.fromObject({
    projects: []
  });
  page.bindingContext = projects;

  httpModule
    .request({
      url: "http://0.0.0.0:3000/projects.json",
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
    .then(
      response => {
        console.log(response.statusCode);
        if (response.statusCode == 200) {
          projects.projects = response.content.toJSON();
        } else {
          Toast.makeText("Failed to fetch projects", "long").show();
        }
      },
      e => {
        Toast.makeText("Failed to get projects", "long").show();
      }
    );
};
