// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SidebarStyle.scss';

function Sidebar() {
    const [activeLv1, setActiveLv1] = useState(false);
    const [activeLv2, setActiveLv2] = useState(false);

    const toggleLv1 = () => {
        setActiveLv1(!activeLv1);
    };

    const toggleLv2 = () => {
        setActiveLv2(!activeLv2);
    };

    return (
        <div className="sidebar-wrapper c-2-4">
            <div className="sidebar__user">
                <div className="sidebar__user-description">
                    <div className="sidebar__user-icon">
                        <Link to="">
                            <i className="fa-regular fa-user" />
                        </Link>
                    </div>
                    <div className="sidebar__user-role">
                        <span className="sidebar__user-name">
                            <Link to="#">Guest</Link>
                        </span>
                        <span className="sidebar__user--role">Người dùng</span>
                    </div>
                </div>
            </div>
            <div className="sidebar__navbar">
                <ul className="sidebar__navbar-list">
                    <li className={`sidebar__navbar-item ${activeLv1 ? 'active' : ''}`}>
                        <div className="navbar-item">
                            <div className="navbar-item-icon navbar-lv1" onClick={toggleLv1}>
                                <i className="fa-solid fa-caret-down" />
                            </div>
                            <Link to="#" className="navbar-item-link navbar-item-btn button">
                                Home
                            </Link>
                        </div>
                        <ul className={`sidebar__navbar-list--lv2 ${activeLv1 ? 'active' : ''}`}>
                            <li className={`sidebar__navbar-item--lv2 ${activeLv2 ? 'active' : ''}`}>
                                <div className="navbar-item">
                                    <div className="navbar-item-icon navbar-lv2" onClick={toggleLv2}>
                                        <i className="fa-solid fa-caret-down" />
                                    </div>
                                    <Link to="#" className="navbar-item-link navbar-item-btn button">
                                        LV 2
                                    </Link>
                                </div>
                                <ul className={`sidebar__navbar-list--lv3 ${activeLv2 ? 'active' : ''}`}>
                                    <li className="sidebar__navbar-item--lv3">
                                        <Link to="#" className="navbar-item-btn button navbar-lv3">
                                            <span className="navbar-item-link">LV 3</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
