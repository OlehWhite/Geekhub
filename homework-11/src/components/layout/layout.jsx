import './layout.css';
import { Header } from '../header';
import { Sidebar } from '../sidebar';
import { Outlet } from "react-router-dom";

export const Layout = () => {

    return (
        <div className='Layout'>
            <Sidebar />
            <div className='Layout-body'>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}