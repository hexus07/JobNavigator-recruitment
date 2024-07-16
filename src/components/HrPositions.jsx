import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Positions = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    // Fetch positions from your API or database
    const fetchPositions = async () => {
      try {
        const response = await fetch("/api/positions"); // Adjust URL as per your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch positions");
        }
        const data = await response.json();
        setPositions(data); // Set positions array with fetched data
      } catch (error) {
        console.error("Error fetching positions:", error);
      }
    };

    fetchPositions();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Positions</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {positions.map((position) => (
          <div key={position.id} className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-lg font-semibold mb-2">{position.title}</h2>
            <p className="text-gray-600">{position.company}</p>
            <Link
              to={`/positions/${position.id}`}
              className="mt-2 inline-block px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Positions;
