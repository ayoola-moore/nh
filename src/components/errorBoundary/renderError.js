import React from "react";

const RenderError = ({ error, errorInfo }) => {
  console.log("Error: ", error, errorInfo);
  return (
    <div>
      <h1>An error just occured... Please contact admin</h1>
      <br />
      <br />
      <h2>We respond within 12 hours</h2>
    </div>
  );
};

export default RenderError;
