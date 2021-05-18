import React from "react";
import "./SectionTitle.css";

const SectionTitle = ({ text }) => {
  return (
    <div className="title-text">
      <h2>{text}</h2>
    </div>
  );
};

export default SectionTitle;
