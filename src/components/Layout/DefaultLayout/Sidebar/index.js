// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './SidebarStyle.module.scss';

const cx = classNames.bind(styles);

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
        <div className={cx('sidebar-wrapper', 'c-2-4')}>
            <div className={cx('sidebar__user')}>
                <div className={cx('sidebar__user-description')}>
                    <div className={cx('sidebar__user-icon')}>
                        <Link to="">
                            <i className={cx('fa-regular', 'fa-user')} />
                        </Link>
                    </div>
                    <div className={cx('sidebar__user-role')}>
                        <span className={cx('sidebar__user-name')}>
                            <Link to="#">Guest</Link>
                        </span>
                        <span className={cx('sidebar__user--role')}>Người dùng</span>
                    </div>
                </div>
            </div>
            <div className={cx('sidebar__navbar')}>
                <ul className={cx('sidebar__navbar-list')}>
                    <li className={cx('sidebar__navbar-item', { active: activeLv1 })}>
                        <div className={cx('navbar-item')}>
                            <div className={cx('navbar-item-icon', 'navbar-lv1')} onClick={toggleLv1}>
                                <i className={cx('fa-solid', 'fa-caret-down')} />
                            </div>
                            <Link to="#" className={cx('navbar-item-link', 'navbar-item-btn', 'button')}>
                                Home
                            </Link>
                        </div>
                        <ul className={cx('sidebar__navbar-list--lv2', { active: activeLv1 })}>
                            <li className={cx('sidebar__navbar-item--lv2', { active: activeLv2 })}>
                                <div className={cx('navbar-item')}>
                                    <div className={cx('navbar-item-icon', 'navbar-lv2')} onClick={toggleLv2}>
                                        <i className={cx('fa-solid', 'fa-caret-down')} />
                                    </div>
                                    <Link to="#" className={cx('navbar-item-link', 'navbar-item-btn', 'button')}>
                                        LV 2
                                    </Link>
                                </div>
                                <ul className={cx('sidebar__navbar-list--lv3', { active: activeLv2 })}>
                                    <li className={cx('sidebar__navbar-item--lv3')}>
                                        <Link to="#" className={cx('navbar-item-btn', 'button', 'navbar-lv3')}>
                                            <span className={cx('navbar-item-link')}>LV 3</span>
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
