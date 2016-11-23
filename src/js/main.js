// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");

var qsa = require("./lib/qsa");

qsa(".dot").forEach(function(d) {
  d.addEventListener("click", function() {
    var stop = d.getAttribute("id");
    document.querySelector(".selected").classList.remove("selected");
    document.querySelector(".desc#" + stop).classList.add("selected");
  });
});