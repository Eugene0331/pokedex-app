import React from "react";
import { Orbit } from "@uiball/loaders";
import "./Loader.scss";

export const Loader = () => {
  return (
    <div className="container-loader">
      <Orbit size={40} speed={2} color="black" />
    </div>
  );
};
