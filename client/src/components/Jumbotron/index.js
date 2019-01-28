import React from "react";

function Jumbotron({ children }) {
  return (
    <div class="jumbotron"
      style={{ height: 150, clear: "both", paddingTop: 15, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
