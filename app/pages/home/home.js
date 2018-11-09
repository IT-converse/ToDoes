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

exports.onStation = function() {
  traverse("station");
};
exports.onMap = function() {
  traverse("map");
};
exports.onBezienswaardigheden = function() {
  traverse("bezienswaardigheden");
};
exports.onRoute = function() {
  traverse("route");
};
exports.onStudent = function() {
  traverse("student");
};
exports.onAbout = function() {
  traverse("about");
};