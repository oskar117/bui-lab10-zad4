import React from "react";
import { render } from "react-dom";
import Page from "./components/Page";
import data from "./data/browsers.json";

render(<Page browsers={data} />, document.getElementById("root"));