import * as React from "react";
import * as ReactDOM from "react-dom";
import "./init.scss";
import DemoPages from "../Component/DemoPages";
import DemoFlux from "../Component/DemoFlux";

let demoComponent1 = document.getElementById('demo-component1');
if (demoComponent1) {
    ReactDOM.render(<DemoPages listName="Pages" /> , demoComponent1);
}

let demoComponent2 = document.getElementById('demo-component2');
if (demoComponent2) {
    ReactDOM.render(<DemoFlux /> , demoComponent2);
}
