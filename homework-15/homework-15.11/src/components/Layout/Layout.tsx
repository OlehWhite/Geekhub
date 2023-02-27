import React from "react";
import { Outlet } from "react-router";
import { Sidebar } from "../Sidebar";
import { Header } from "../Header";

import "./Layout.css";

export const Layout: React.FC = () => {
  return (
    <div className="layout-wrapper">
      <Sidebar />
      <div className="layout-content">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};