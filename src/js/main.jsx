import React from "react";
import ReactDOM from "react-dom/client";
import SecondsCounter from "./components/Home"; 

let counter = 0;

const container = document.getElementById('app'); 

const root = ReactDOM.createRoot(container);

setInterval(() => {
    root.render(
        <SecondsCounter seconds={counter} />
    );
    counter++;

}, 1000);