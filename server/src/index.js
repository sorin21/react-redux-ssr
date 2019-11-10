// define some functions that babel needs to use 
// in the async await sytax from actions
// import "@babel/polyfill";
// import "core-js/stable";
// import "regenerator-runtime/runtime";
import 'babel-polyfill';

import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

// Tells to express to treat this public folder static, available outsite world
// so the bundle.js, from below, comes from here
app.use(express.static('public'));

// * allows all routes and express decides what to do
app.get('*', (req, res) => {
  const store = createStore();
  // const context = {};
  // logic to initialize and load data into store
  res.send(renderer(req, store));
})

app.listen(3000, () => {
  console.log("Listening on PORT 3000");
})