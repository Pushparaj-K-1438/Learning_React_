# Learning React from Scratch

# parcel
- Dev Build
- Local server
- HMR = Hot Module Replacement
- Uses a File Watvhing Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Mifify of our file for production build
- Do Bundling 
- Compressing done
- Consistent Hashing
- Code spliting 
- Differential bundling - support older browsers
- Diagnostic
- Good Error Handling 
- Host apps on Https
- Tree Shakiing Algorithm  - remove unused code 
- Different build for DEV and Prod bundles

# PROD and Dev build
- Prod Build : npx parcel build index.html -- when using prod build we need to remove the main:App.js in package.json as it is the entry
  point for our project 
- Dev Build : npx parcel index.html

# Browser Support
- we can configure which all browsers our app supports so er need to add the code in package.json as browsersList:[]

# createBrowserRouter
- is used to create routed for out applications
-  eg: 
-   const router = createBrowserRouter([
-     {
-       path: "/",
-       element: <MainWrap />,
-       errorElement:<Error />
-     },
-   ])


# RouterProvider
- is used to render data
- <RouterProvider router={router} />


# Outlet
- is used to render the componect keeping the common element and render the routed emelent
- <Outlet />