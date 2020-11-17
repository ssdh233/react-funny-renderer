import React from "react";
import FunnyRenderer from "./index.js";

function Test() {
  return <div>test</div>;
}

function App() {
  return <div><Test /></div>;
}

let container = {};
FunnyRenderer.render(<App />, container);
// console.log("container", container)
