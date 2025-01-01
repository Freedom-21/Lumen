import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Debugging: Check if effect is being triggered
    console.log("Logout effect triggered");

    // Clear the access token and any other session data
    localStorage.clear();
    console.log("localStorage cleared");

    // Redirect to the login page
    navigate("/Home");
    console.log("Navigating to /login");
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <h1 className="text-lg font-semibold text-gray-700">Logging out...</h1>
    </div>
  );
};

export default Logout;
