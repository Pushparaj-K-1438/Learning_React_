import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";

const MainWrap = () => (
    <div className="main_wrap">
        <Header />
        <Body />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainWrap />);