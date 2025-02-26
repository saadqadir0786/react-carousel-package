const typescript = require("rollup-plugin-typescript2");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const peerDepsExternal = require("rollup-plugin-peer-deps-external");

module.exports = {
  input: "src/Carousel.tsx",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
    },
  ],
  plugins: [peerDepsExternal(), resolve(), commonjs(), typescript()],
  external: ["react", "react-dom"],
};
