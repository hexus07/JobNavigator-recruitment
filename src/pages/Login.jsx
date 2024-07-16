import background from "../assets/images/background.png";
import { useState } from "react";
import { loginUser } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { getRole } from "../api/database";

const BackgroundImageStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Assuming loginUser returns userRole after successful login
      const user = await loginUser(email, password);
      console.log("Login successful");
      // Navigate based on userRole
      const userRole = await getRole(user.uid);
      console.log("User role:", userRole);
      if (userRole === "recruiter") {
        navigate("/hr-console");
      } else {
        navigate("/user-dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div style={BackgroundImageStyle}>
      <div className="bg-white bg-opacity-30 shadow-md flex items-center justify-center gap-16 w-1/3 h-1/2 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Account Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
