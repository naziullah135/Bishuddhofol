import React from "react";
import "./SectionTitle.css";

const SectionTitle = ({ title, slogan }) => {
  return (
    <div className="title-text">
      <h2>{title}</h2>
      <h1>{slogan}</h1>
    </div>
  );
};

export default SectionTitle;
