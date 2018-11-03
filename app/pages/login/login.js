const frameModule = require("ui/frame");


function traverse(page) {
    console.log("traversing to " + page);
    frameModule.topmost().navigate({
      moduleName: "pages/" + page + "/" + page,
      transition: "slideBottom"
    });
  }
  
  exports.onLogin = function() {
    traverse("home");
  };