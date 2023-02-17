import { Outlet } from "react-router";
import { Sidebar } from "../sidebar";
import { Header } from "../header"

import "./layout.css"

export const Layout = () => {

    return (
        <div className="layout-wrapper">
            <Sidebar />
            <div className="layout-content">
                <Header />
                <Outlet />
            </div>
        </div>
    )
}