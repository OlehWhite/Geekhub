import { useNavigate } from "react-router";
import "./Header.css";
import React from "react";

export const Header: React.FC = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div className="header-wrapper">
      <h1 className="header">Header</h1>
      <button className="span-back" onClick={goBack}>
        Back
      </button>
    </div>
  );
};
