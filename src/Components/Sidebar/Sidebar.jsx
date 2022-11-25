import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import './Sidebar.scss'
import img from "../../images/brose.png"
import logo from "../../images/Capgemini.png"

const Sidebar = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <><div className="btn-group position-absolute top-0 end-0 mx-4 my-2 dropdown-center">
            <button className="btn bg-transparent dropdown-toggle border-0" data-bs-toggle="dropdown">
                (Schenker Deutschland AG - ABSZZ8A175)
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Schenker Deutschland AG - ABSZZ8A175</a></li>
                <li><a className="dropdown-item" href="#">Eckerle Automotive GmbH - AASZZ8A165</a></li>
                <li><a className="dropdown-item" href="#">Dummy Company LKG More than forty characters - DSSZZ8A181</a></li>
                <li><a className="dropdown-item" href="#">Schenker Deushland FOR TESTING MORE THAN - ABSZZ7A777</a></li>
                <li><a className="dropdown-item" href="#">Dummy Company - ACSZZ8A529</a></li>
                <li><a className="dropdown-item" href="#">Dummy empty resource 521 - 521</a></li>
                <li><a className="dropdown-item" href="#">Dummy empty resource 521 - 440</a></li>
                <li><a className="dropdown-item" href="#">Dummy empty resource 442 - 442</a></li>
                <li><a className="dropdown-item" href="#">Dummy empty resource 444 - 444</a></li>
                <li><a className="dropdown-item" href="#">Dummy empty resource 443 - 443</a></li>
                <li><a className="dropdown-item" href="#">Dummy empty resource 441 - 441</a></li>
                <li><a className="dropdown-item" href="#">Join other legal entity</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/">Manage Account </a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/">Sign Out </a></li>
            </ul>
        </div><div className="d-flex">
                <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
                    <div className="top_section">
                        <img style={{ display: isOpen ? "block" : "none" }} src={img} className='brose'></img>
                        <div style={{ marginLeft: isOpen ? "150px" : "0px", marginTop: "10px" }} className="bars">
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
                    <Link to="/userManagement" className="link">
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
            </div></>
    )
}

export default Sidebar
