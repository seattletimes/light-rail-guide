require("./lib/social");
require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
var animateScroll = require("./lib/animateScroll");

var qsa = require("./lib/qsa");
require("./lib/gallery.js");

document.querySelector(".nav-map svg").addEventListener("click", function(e) {
  if (e.target.classList[0].indexOf("cls-4") > -1 || e.target.classList[0].indexOf("cls-3") > -1) {
    var parent = e.target.parentNode;
    var stop = e.target.parentNode.getAttribute("data-stop");
    while (!stop) {
      parent = parent.parentNode;
      stop = parent.getAttribute("data-stop");
    }
    animateScroll("#" + stop)
  }
});

qsa(".top-button").forEach(function(t) {
  t.addEventListener("click", function(e) {
    animateScroll("#top");
  });
});