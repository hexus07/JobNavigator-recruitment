import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HrConsole from "../pages/HrConsole";
import UserDashboard from "../pages/UserDashboard.jsx";
import Overview from "../components/Overview.jsx";
import Companies from "../components/Companies.jsx";
import Positions from "../components/HrPositions.jsx";
import Answers from "../components/Answers.jsx";
import CompReg from "../pages/CompReg.jsx";
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
  {
    path: "/companies",
    element: (
      <PrivateRouter requiredRole="recruiter">
        <Companies />
      </PrivateRouter>
    ),
  },
  {
    path: "/positions",
    element: (
      <PrivateRouter requiredRole="recruiter">
        <Positions />
      </PrivateRouter>
    ),
  },
  {
    path: "/answers",
    element: (
      <PrivateRouter requiredRole="recruiter">
        <Answers />
      </PrivateRouter>
    ),
  },
  {
    path: "/overview",
    element: (
      <PrivateRouter requiredRole="recruiter">
        <Overview />
      </PrivateRouter>
    ),
  },
  {
    path: "/company-registration",
    element: (
      <PrivateRouter requiredRole="recruiter">
        <CompReg />
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
