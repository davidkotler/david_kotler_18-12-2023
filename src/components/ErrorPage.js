import React from "react";
import "../styles/errorPage.css";

const ErrorPage = () => {
  // handle HTTP errors
  return (
    <div className="error-container">
      <div className="error-content">
        <h1>HTTP Error !!!</h1>
        <p>Please try again later or contact support.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
