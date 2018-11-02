var view = require("ui/core/view");
const frameModule = require("ui/frame");

var drawer;

function traverse(page) {
  console.log("traversing to" + page);
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

exports.onCreate = function() {
  traverse("create");
};

exports.onOverview = function() {
  traverse("overview");
};
