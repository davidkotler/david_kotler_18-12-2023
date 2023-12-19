import React, { useState, useEffect } from "react";

const ErrorHandler = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleErrors = (event) => {
      // You can handle errors here and set hasError to true
      setHasError(true);
      // Log the error to an error reporting service if needed
      console.error(event.error);
    };

    // Add a global error handler
    window.addEventListener("error", handleErrors);

    return () => {
      // Remove the global error handler when the component unmounts
      window.removeEventListener("error", handleErrors);
    };
  }, []);

  if (hasError) {
    // Render a fallback UI when an error occurs
    return (
      <div>
        <h1>Something went wrong.</h1>
        <p>Please refresh the page or try again later.</p>
      </div>
    );
  }

  return children;
};

export default ErrorHandler;
