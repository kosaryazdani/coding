const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const buildStyle = () => {
  return src("*.scss").pipe(sass()).pipe(dest("css"));
};

const watchTask = () => {
  watch(["*.scss"], buildStyle);
};

exports.default = series(buildStyle, watchTask);
