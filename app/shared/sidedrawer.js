const frameModule = require("ui/frame");

var drawer;

function traverse(page) {
  console.log("traversing to " + page);
  frameModule.topmost().navigate({
    moduleName: "pages/" + page + "/" + page,
    transition: "slideBottom"
  });
}

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
