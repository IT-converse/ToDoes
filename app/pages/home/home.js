var view = require("ui/core/view");
const frameModule = require("ui/frame");
var Observable = require("data/observable");
const httpModule = require("http");

var drawer;

function traverse(page) {
  console.log("traversing to " + page);
  frameModule.topmost().navigate({
    moduleName: "pages/" + page + "/" + page,
    transition: "slideBottom"
  });
}

exports.pageLoaded = function(args) {
  var page = args.object;
  drawer = view.getViewById(page, "sideDrawer");
};

exports.toggleDrawer = function() {
  drawer.toggleDrawerState();
};

exports.onNewTask = function() {
  traverse("create");
};

exports.onTasks = function() {
  traverse("overview");
};

exports.onLogOUt = function() {
  traverse("login");
};

// We can use auth-tokens via header

exports.onLoaded = function(args) {
  let page = args.object;
  let projects = new Observable.fromObject({
    projects: []
  });
  page.bindingContext = projects;

  httpModule
    .request({
      url: "http://192.168.1.105:3000/projects.json",
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
