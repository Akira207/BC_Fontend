import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './SidebarStyle.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCaretDown, faHome, faBook, faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('sidebar-wrapper', 'c-1')}>
            <div className={cx('sidebar__user')}>
                <div className={cx('sidebar__user-description')}>
                    <div className={cx('sidebar__user-icon')}>
                        <Link to="">
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    </div>
                    
                </div>
            </div>
            <div className={cx('sidebar__navbar')}>
                <ul className={cx('sidebar__navbar-list')}>
                    <li className={cx('sidebar__navbar-item')}>
                        <div className={cx('navbar-item')}>
                            <div className={cx('navbar-item-icon', 'hover-block')}>
                                <FontAwesomeIcon icon={faHome} />
                            </div>
                            <div className={cx('navbar-item-text')}>
                                Home
                            </div>
                        </div>          
                    </li>
                    <li className={cx('sidebar__navbar-item')}>
                        <div className={cx('navbar-item')}>
                            <div className={cx('navbar-item-icon', 'hover-block')}>
                                <FontAwesomeIcon icon={faBook} />
                            </div>
                            <div className={cx('navbar-item-text')}>
                                Đã đọc
                            </div>
                        </div>          
                    </li>
                    <li className={cx('sidebar__navbar-item')}>
                        <div className={cx('navbar-item')}>
                            <div className={cx('navbar-item-icon', 'hover-block')}>
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                            <div className={cx('navbar-item-text')}>
                                Yêu thích
                            </div>
                        </div>          
                    </li>
                    <li className={cx('sidebar__navbar-item')}>
                        <div className={cx('navbar-item')}>
                            <div className={cx('navbar-item-icon', 'hover-block')}>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                            <div className={cx('navbar-item-text')}>
                                Đăng tài liệu
                            </div>
                        </div>          
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
