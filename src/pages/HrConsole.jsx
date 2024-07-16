import { useState } from "react";
import JobPositionForm from "../components/JobPositionForm.jsx";
import HrHeader from "../components/HrHeader.jsx";
const Dashboard = () => {
  return (
    <>
      <HrHeader />
      <JobPositionForm />
    </>
  );
};

export default Dashboard;
