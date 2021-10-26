import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const methodDoesNotExist = () => {
    console.log("Stoplight");
  };
  return (
    <nav className="topnav">
      <NavLink to="/stoplight-project">Stoplight Project</NavLink>
      <NavLink to="/about">
        <button onClick={methodDoesNotExist}>Break the world</button>;
      </NavLink>
    </nav>
  );
};
