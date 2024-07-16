import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HrConsole from "../pages/HrConsole";
import UserDashboard from "../pages/UserDashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/hr-console",
    element: (
      <PrivateRouter requiredRole="recruiter">
        <HrConsole />
      </PrivateRouter>
    ),
  },
  {
    path: "/user-dashboard",
    element: (
      <PrivateRouter requiredRole="jobSeeker">
        <UserDashboard />
      </PrivateRouter>
    ),
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
