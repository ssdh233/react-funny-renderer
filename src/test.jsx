import React from "react";
import FunnyRenderer from "./index.js";

function Test() {
  return <test>whatever</test>;
}

function App() {
  return (
    <div>
      <Test />
    </div>
  );
}

function toString(node) {
  // String literal
  if (!node.type) {
    return node;
  }
  if (node.children && node.children.length > 0) {
    return `<${node.type}>${node.children.map(toString).join("")}</${node.type}>`;
  } else {
    return `<${node.type} />`;
  }
}

let container = {
  type: "Root",
};
FunnyRenderer.render(<App />, container);

console.log(toString(container));
