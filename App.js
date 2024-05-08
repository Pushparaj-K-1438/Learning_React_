import React from "react";
import ReactDOM from "react-dom/client";

const JSXHeader = () => (
    <h1>JSX Header</h1>
)
const JsxElement = <h2>Jsx Header Element</h2>

const HeadingComponent = () => (
    <div>
        {JsxElement}
        {JSXHeader()}
        <JSXHeader />
        <h1>Heading Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);