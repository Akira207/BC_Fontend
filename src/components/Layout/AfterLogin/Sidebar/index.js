import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './SidebarStyle.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Sidebar() {
    const [activeLv1, setActiveLv1] = useState(null);
    const [activeLv2, setActiveLv2] = useState(null);

    const toggleLv1 = (id) => {
        setActiveLv1(activeLv1 === id ? null : id);
        setActiveLv2(null); // Reset Lv2 when changing Lv1
    };

    const toggleLv2 = (id) => {
        setActiveLv2(activeLv2 === id ? null : id);
    };

    const navItems = [
        {
            id: 1,
            title: 'Home',
            children: [
                {
                    id: 1,
                    title: 'LV 2-1',
                    children: [
                        { id: 1, title: 'LV 3-1' },
                        { id: 2, title: 'LV 3-2' },
                    ],
                },
                {
                    id: 2,
                    title: 'LV 2-2',
                    children: [
                        { id: 3, title: 'LV 3-3' },
                        { id: 4, title: 'LV 3-4' },
                    ],
                },
            ],
        },
        {
            id: 2,
            title: 'About',
            children: [
                {
                    id: 3,
                    title: 'LV 2-3',
                    children: [
                        { id: 5, title: 'LV 3-5' },
                        { id: 6, title: 'LV 3-6' },
                    ],
                },
            ],
        },
    ];

    return (
        <div className={cx('sidebar-wrapper', 'c-2-4')}>
            <div className={cx('sidebar__user')}>
                <div className={cx('sidebar__user-description')}>
                    <div className={cx('sidebar__user-icon')}>
                        <Link to="">
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    </div>
                    <div className={cx('sidebar__user-role')}>
                        <span className={cx('sidebar__user-name')}>
                            <Link to="#">Tên người dùng</Link>
                        </span>
                        <span className={cx('sidebar__user--role')}></span>
                    </div>
                </div>
            </div>
            <div className={cx('sidebar__navbar')}>
                <ul className={cx('sidebar__navbar-list')}>
                    {navItems.map((item) => (
                        <li
                            key={item.id}
                            className={cx('sidebar__navbar-item', { active: activeLv1 === item.id })}
                        >
                            <div className={cx('navbar-item')}>
                                <div
                                    className={cx('navbar-item-icon', 'navbar-lv1')}
                                    onClick={() => toggleLv1(item.id)}
                                >
                                    <FontAwesomeIcon icon={faCaretDown} />
                                </div>
                                <Link to="#" className={cx('navbar-item-link', 'navbar-item-btn', 'button')}>
                                    {item.title}
                                </Link>
                            </div>
                            <ul className={cx('sidebar__navbar-list--lv2', { active: activeLv1 === item.id })}>
                                {item.children.map((subItem) => (
                                    <li
                                        key={subItem.id}
                                        className={cx('sidebar__navbar-item--lv2', { active: activeLv2 === subItem.id })}
                                    >
                                        <div className={cx('navbar-item')}>
                                            <div
                                                className={cx('navbar-item-icon', 'navbar-lv2')}
                                                onClick={() => toggleLv2(subItem.id)}
                                            >
                                                <FontAwesomeIcon icon={faCaretDown} />
                                            </div>
                                            <Link to="#" className={cx('navbar-item-link', 'navbar-item-btn', 'button')}>
                                                {subItem.title}
                                            </Link>
                                        </div>
                                        <ul className={cx('sidebar__navbar-list--lv3', { active: activeLv2 === subItem.id })}>
                                            {subItem.children.map((lv3Item) => (
                                                <li key={lv3Item.id} className={cx('sidebar__navbar-item--lv3')}>
                                                    <Link to="#" className={cx('navbar-item-btn', 'button', 'navbar-lv3')}>
                                                        <span className={cx('navbar-item-link')}>{lv3Item.title}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
