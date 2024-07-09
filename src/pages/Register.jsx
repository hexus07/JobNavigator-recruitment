import { useState, useEffect } from "react";
import { registerUser } from "../api/auth";
import { createUser } from "../api/database";
import PropTypes from "prop-types";

const Register = () => {
  const [fullName, setFullName] = useState(""); // Add this line
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [showModal, setShowModal] = useState(true);
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    if (userType === "recruiter") {
      setRole("recruiter");
    } else if (userType === "jobSeeker") {
      setRole("jobSeeker");
    }
  }, [userType]); // This effect runs only when userType changes.

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await registerUser(email, password);
      await createUser(user.uid, email, fullName, role);
      // Redirect to login page or dashboard
    } catch (error) {
      console.error("Register error:", error);
    }
  };

  const handleUserTypeSelection = (type) => {
    setUserType(type);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Create an Account</h2>
            <p className="mb-8">I am a...</p>
            <button
              className="bg-purple-600 text-white px-4 py-2 rounded-lg mr-4 hover:bg-purple-700"
              onClick={() => handleUserTypeSelection("recruiter")}
            >
              Recruiter
            </button>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              onClick={() => handleUserTypeSelection("jobSeeker")}
            >
              Job Seeker
            </button>
          </div>
        </div>
      )}

      {!showModal && (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          {userType === "recruiter" ? (
            <RecruiterForm
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              onSubmit={handleSubmit}
            />
          ) : (
            <JobSeekerForm
              fullName={fullName}
              setFullName={setFullName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      )}
    </div>
  );
};
const RecruiterForm = ({
  email,
  password,
  setEmail,
  setCompanyName,
  setPassword,
  onSubmit,
}) => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Recruiter Account Creation</h2>
    <form onSubmit={onSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="companyName">
          Company Name
        </label>
        <input
          className="w-full px-3 py-2 border rounded-lg"
          type="text"
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>
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
        className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
      >
        Create Account
      </button>
    </form>
  </div>
);

const JobSeekerForm = ({
  fullName,
  setFullName,
  email,
  password,
  setEmail,
  setPassword,
  onSubmit,
}) => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Job Seeker Account Creation</h2>
    <form onSubmit={onSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="fullName">
          Full Name
        </label>
        <input
          className="w-full px-3 py-2 border rounded-lg"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
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
        Create Account
      </button>
    </form>
  </div>
);

// Add prop types for RecruiterForm and JobSeekerForm

export default Register;
