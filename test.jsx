import React, { useState } from "react";

const App = () => {
  const [showModal, setShowModal] = useState(true);
  const [userType, setUserType] = useState(null);

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
          {userType === "recruiter" ? <RecruiterForm /> : <JobSeekerForm />}
        </div>
      )}
    </div>
  );
};

const RecruiterForm = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Recruiter Account Creation</h2>
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="companyName">
          Company Name
        </label>
        <input
          className="w-full px-3 py-2 border rounded-lg"
          type="text"
          id="companyName"
          name="companyName"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="w-full px-3 py-2 border rounded-lg"
          type="email"
          id="email"
          name="email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="w-full px-3 py-2 border rounded-lg"
          type="password"
          id="password"
          name="password"
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

const JobSeekerForm = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Job Seeker Account Creation</h2>
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="fullName">
          Full Name
        </label>
        <input
          className="w-full px-3 py-2 border rounded-lg"
          type="text"
          id="fullName"
          name="fullName"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="w-full px-3 py-2 border rounded-lg"
          type="email"
          id="email"
          name="email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="w-full px-3 py-2 border rounded-lg"
          type="password"
          id="password"
          name="password"
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

export default App;
