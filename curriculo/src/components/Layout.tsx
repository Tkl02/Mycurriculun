import Taskbar from "./taskbar/Taskbar";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => (
    <>
        <Taskbar/>
        <Outlet/>
        <Footer/>
    </>
)

export default Layout;