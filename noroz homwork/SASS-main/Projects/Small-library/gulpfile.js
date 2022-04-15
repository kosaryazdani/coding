const { src, dest, watch, series } = require("gulp");
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const buildStyle = () => {
  return src("./MoonLibrary/**/*.scss").pipe(sass()).pipe(dest("css"));
};

const watchTask = () => {
  watch(["./MoonLibrary/**/*.scss"], buildStyle);
};

exports.default = series(buildStyle, watchTask);
