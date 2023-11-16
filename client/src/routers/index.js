import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import HomeScreen from "../pages/home";
// import SigninScreen from "../pages/signin";
// import SignupScreen from "../pages/signup";
import AuthScreen from "../pages/auth";
import ServicesPage from "../pages/services";
import TaskDataPage from "../pages/taskData";
import RepairMatesPage from "../pages/repairmates";
import PaymentPage from "../pages/payment";
import AboutPage from "../pages/about";
import UserInfo from "../pages/userinfo";

export const router = createBrowserRouter([
  { path: "/", element: <HomeScreen /> },
  // { path: "/signin", element: <SigninScreen /> },
  // { path: "/signup", element: <SignupScreen /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "/auth", element: <AuthScreen /> },
  { path: "/task/:serviceId", element: <TaskDataPage /> },
  { path: "/repairmates", element: <RepairMatesPage /> },
  { path: "/payment", element: <PaymentPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/userinfo/:userId", element: <UserInfo /> },
]);
