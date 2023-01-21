import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

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
    <App />
    {/* <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot> */}
  </React.StrictMode>
);
