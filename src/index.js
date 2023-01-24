import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/signin",
//     element: <SignInPage />,
//   },
//   {
//     path: "/signup",
//     element: <SignUpPage />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
     <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
