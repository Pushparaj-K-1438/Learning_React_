import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Contact from "./Contact";
import Error from "./Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./About";
import UserContext from "../utils/UserContext";

// Lazy loading
//chunking
//Code spliting
//ondemandloading

const MainWrap = () => {
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        const userName = {
            name: "pushparaj K"
        }
        setUserInfo(userName.name);
    }, [])
    return (
        <UserContext.Provider value={{name: userInfo}}>
            <div className="flex flex-col">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
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