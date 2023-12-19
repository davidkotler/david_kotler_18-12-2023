import React from "react";
import "../styles/errorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1>Oops! Something went wrong.</h1>
        <p>Please try again later or contact support.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
