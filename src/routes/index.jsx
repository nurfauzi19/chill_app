import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Daftarsaya from "../pages/Daftarsaya";
import Series from "../pages/Series";
import Film from "../pages/Film";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/daftarsaya",
    element: <Daftarsaya />,
  },
  {
    path: "/series",
    element: <Series />,
  },
  {
    path: "/film",
    element: <Film />,
  },
]);
