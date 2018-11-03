const Observable = require("data/observable");
const httpModule = require("http");
const frameModule = require("ui/frame");

exports.onLoaded = function(args) {
  let page = args.object;
  let project = new Observable.fromObject({
    name: "",
    email: ""
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
      url: "http://192.168.1.105:3000/users.json",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify({
        name: project.name,
        email: project.email
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
