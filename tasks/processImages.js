var exif = require("exif-parser");
var fs = require("fs");
var path = require("path");
var csv = require("csv");

module.exports = function(grunt) {

  grunt.registerTask("process-images", function() {

    var done = this.async();

    var files = grunt.file.expand("src/assets/galleries/*.JPG");
    var output = fs.createWriteStream("./data/gallery.csv");
    var writer = csv.stringify();
    writer.pipe(output);

    files.forEach(function(f) {
      var buffer = fs.readFileSync(f);
      var meta = exif.create(buffer).parse();
      if (!meta.tags.ImageDescription) return;
      var caption = meta.tags.ImageDescription.trim();
      writer.write([f, caption]);
    });

    output.on("finish", done);

    writer.end();

  });

};