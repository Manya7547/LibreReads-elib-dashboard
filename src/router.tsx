import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import DashboardLayout from "./layouts/DashboardLayout";
import BooksPage from "./pages/BooksPage";

const router = createBrowserRouter([
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "books",
        element: <BooksPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

export default router;
