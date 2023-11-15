import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import HomeScreen from "../pages/home";
// import SigninScreen from "../pages/signin";
// import SignupScreen from "../pages/signup";
import AuthScreen from "../pages/auth";
import ServicesPage from "../pages/services";

export const router = createBrowserRouter([
  { path: "/", element: <HomeScreen /> },
  // { path: "/signin", element: <SigninScreen /> },
  // { path: "/signup", element: <SignupScreen /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "/auth", element: <AuthScreen /> },
]);
