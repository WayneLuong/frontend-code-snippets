INSTALLATIONS
npm install react react-dom -s
WEBPACK
npm i --save-dev webpack webpack-dev-server webpack-cli
BABEL
npm i --save-dev babel-core babel-loader babel-preset-env babel-preset-react html-webpack-plugin

SCRIPTS
open- auto openbrowser hot -auto reload
--production create and minify in dist folder for production
"scripts": {
    "start": "webpack-dev-server --mode development development --open --hot",
    "build": "webpack --mode production"
  }