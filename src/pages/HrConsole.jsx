import { useState } from "react";
import JobPositionForm from "../components/JobPositionForm.jsx";

const Dashboard = () => {
  const [positions, setPositions] = useState([]);

  const handleAddPosition = (newPosition) => {
    setPositions([...positions, newPosition]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">HR Dashboard</h1>
      <JobPositionForm onSubmit={handleAddPosition} />

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Current Positions</h2>
        {positions.map((position, index) => (
          <div key={index} className="bg-white p-4 mb-4 shadow-md rounded-md">
            <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
            <p className="text-gray-600">{position.company}</p>
            <p className="mt-2">{position.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
