import { Link } from "react-router-dom";
import { Users } from "../users";

import "./sidebar.css"
import "../../App.css"

import logo from "../../logo.svg"

export const Sidebar = () => {

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