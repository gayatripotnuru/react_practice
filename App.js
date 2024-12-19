import React from  "react";
import ReactDOM from "react-dom/client";

//React element is an object.
var hOneReact = React.createElement("h1", {}, "HEADING CREATED using React");
//hOneReact is a object

var htmlRoot = document.getElementById("root");
var rootReact = ReactDOM.createRoot(htmlRoot);

//root.render(..) replaces the existing childs in the root with a html element created from hOneReact object
rootReact.render(hOneReact);

console.log(hOneReact);