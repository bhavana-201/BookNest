import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Theme + Layout wrapper
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "dashboard", element: <Dashboard /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
