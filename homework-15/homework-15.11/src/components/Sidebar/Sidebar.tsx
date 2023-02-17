import React from "react";
import { Link } from "react-router-dom";
import { Users } from "../Users";

import "./sidebar.css"
import "../../App.css"

import logo from "../../logo.svg"

export const Sidebar: React.FC = () => {

    return (
        <div className="sidebar">
            <Link
                className="link"
                to={"/"}
                reloadDocument>
                <img
                    src={logo}
                    className="App-logo"
                    alt="logo" />
            </Link>
            <Users />
        </div>
    )
}