import React from 'react'
import { NavLink,Link} from 'react-router-dom';
import { useState } from 'react';
import './Sidebar.css'
import img from "../../images/brose.png"
import logo from "../../images/Capgemini.png"

const Sidebar = ({children}) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="nav-container">
            <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <img style={{ display: isOpen ? "block" : "none" }} src={img} className='brose'></img>
                    <div style={{ marginLeft: isOpen ? "150px" : "0px" , marginTop : "10px"}} className="bars">
                        <div className="icon" onClick={toggle}><i className="bi bi-list"></i></div>
                    </div>
                </div>
                <Link to="/home" className="link">
                    <div className="icon"><i class="bi bi-house"></i></div>
                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Home</div>
                </Link>
                <Link to="/application" className="link">
                    <div className="icon"><i className="bi bi-menu-up"></i></div>
                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Application</div>
                </Link>
                <Link to="/userManagement" className="link" >
                    <div className="icon"><i className="bi bi-people"></i></div>
                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">User Management</div>
                </Link>
                <Link to="/help" className="link">
                    <div className="icon"><i className="bi bi-info-circle"></i></div>
                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Need Help</div>
                </Link>

                <div className='engine' style={{ display: isOpen ? "block" : "none" }}>CIA4Auto© Engine Powered by</div>
                <img style={{ display: isOpen ? "block" : "none" }} className='logo' src={logo}></img>
            </div>
            <div className='inner-components'>{children}</div>
        </div>
    )
}

export default Sidebar
