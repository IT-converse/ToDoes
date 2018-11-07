var view = require("ui/core/view");
const frameModule = require("ui/frame");

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
  traverse("createProject");
};

exports.onTasks = function() {
  traverse("overview");
};

exports.onLogOUt = function() {
  traverse("login");
};

exports.onTest = function() {
  traverse("test");
};
