import React, { useState, useEffect } from "react";

const ErrorHandler = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleErrors = (event) => {
      setHasError(true);

      console.error(event.error);
    };

    window.addEventListener("error", handleErrors);

    return () => {
      window.removeEventListener("error", handleErrors);
    };
  }, []);

  if (hasError) {
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
