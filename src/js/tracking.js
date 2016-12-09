var qsa = require("./lib/qsa");
var track = require("./lib/tracking");

qsa(".cls-3").forEach(function(item) {
  item.addEventListener("click", function(e) {
    var parent = e.target.parentNode;
    var stop = e.target.parentNode.getAttribute("data-stop");
    while (!stop) {
      parent = parent.parentNode;
      stop = parent.getAttribute("data-stop");
    }
    track("interactive", "white-icon", stop);
  });
});

qsa(".cls-4").forEach(function(item) {
  item.addEventListener("click", function(e) {
    var parent = e.target.parentNode;
    var stop = e.target.parentNode.getAttribute("data-stop");
    while (!stop) {
      parent = parent.parentNode;
      stop = parent.getAttribute("data-stop");
    }
    track("interactive", "navy-icon", stop);
  });
});

qsa(".top-button").forEach(function(item) {
  item.addEventListener("click", function(e) {
    track("interactive", "top", "top");
  });
});