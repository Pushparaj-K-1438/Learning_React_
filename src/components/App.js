import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Contact from "./Contact";
import Resturant from "./Resturant";
import Error from "./Error";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./About";

const MainWrap = () => {
    return (
        <div className="main_wrap">
            <Header />
            <Outlet />
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainWrap />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path:"/resturant/:resId",
                element: <Resturant />
            }
        ],
        errorElement:<Error />
    }    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);