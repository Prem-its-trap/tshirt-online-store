import React from "react";
import Menu from "./menu";

const Base = ({
  title = "My Title",
  description = "My description",
  className = "bg-dark text-white p-1",
  children,
}) => {
  return (
    <div>
      <Menu />
      <div className="container-fluid">
        <div className="jumbotron bg-dark text-white text-center">
          <h2 className="display-4">{title} </h2>
          <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
      </div>
      {/* footer */}
      <footer className="footer bg-dark mt-auto py-3">
        <div className="container-fluid bg-success text-white text-center">
          <h4>If you got any question feel free to reach bout</h4>
          <button className="btn btn-warning btn-lg mb-2">Contact Us</button>
        </div>
        <div className="container">
          <span className="text-muted">An Amazing bootcamp</span>
        </div>
      </footer>
    </div>
  );
};
export default Base;
