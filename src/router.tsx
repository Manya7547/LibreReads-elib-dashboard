import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage";
import LoginPage from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
