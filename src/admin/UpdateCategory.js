import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import logo from "./loader.gif";

const UpdateCategory = () => {
  return (
    <Base
      title="Create a category here"
      description="Add a new category from new tshirts"
      className="container bg-info p-4"
    >
      <h1 className="text-white">
        Work in progress <img src={logo} alt="" height="200" width="200" />
      </h1>
    </Base>
  );
};

export default UpdateCategory;
