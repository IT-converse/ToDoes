const Observable = require("data/observable");
const httpModule = require("http");
const frameModule = require("ui/frame");

exports.onLoaded = function(args) {
  let page = args.object;
  let project = new Observable.fromObject({
    title: "",
    description: ""
  });
  page.bindingContext = project;
};

exports.onCreate = function(args) {
  let project = args.object.bindingContext;
  var drawer = frameModule.topmost().navigate({
    moduleName: "pages/" + "home" + "/" + "home",
    transition: "slideBottom"
  });
  console.log(project);

  httpModule
    .request({
      url: "http://0.0.0.0:3000/projects.json",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify({
        title: project.title,
        description: project.description,
        user_id: 1
      })
    })
    .then(
      response => {
        console.log(response);
        // const result = response.content.toJSON();
      },
      e => {
        console.log(e);
      }
    );
};
