import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Contact from "./Contact";
import Error from "./Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./About";

// Lazy loading
//chunking
//Code spliting
//ondemandloading

const MainWrap = () => {
    return (
        <div className="flex flex-col">
            <Header />
            <Outlet />
        </div>
    );
};
const Resturant = lazy(() => import("./Resturant"));

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
                path: "/resturant/:resId",
                element: <Suspense fallback={<h2>Loading...</h2>}><Resturant /></Suspense>
            }
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);