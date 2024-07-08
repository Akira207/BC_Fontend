import styles from './HeaderStyle.module.scss';
import classNames from 'classnames/bind';
import logo from '~/images/logo.jpg';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('header', 'c-12')}>
            <div className={cx('header__logo', 'c-1')}>
                <Link className={cx('header__logo-link')} to="/">
                    <img className={cx('header__logo-img')} src={logo} alt="logo" />
                </Link>
            </div>
            <div className={cx('c-o-2')} />
            <form action="#" className={cx('c-3', 'header__search')}>
                <input type="text" className={cx('header__search-input')} placeholder="Tìm kiếm" />
                <button className={cx('header__search-button')}>
                    <i className={cx('fas', 'fa-search')} />
                </button>
            </form>
            <div className={cx('c-o-3')} />
            <div class={cx('header__user', 'c-3')}>
                <Link to="" className={cx('user-link')}>
                    <div class={cx('header__user-icon')}>
                        <i class={cx('fa-regular', 'fa-user')}></i>
                    </div>
                    <span>Tên người dùng</span>
                </Link>
                <ul className={cx('user-menu')}>
                    <li className={cx('menu-item')}>
                        <Link className={cx('menu-item-link')}>Thông tin cá nhân</Link>
                    </li>                 
                    <li className={cx('menu-item')}>
                        <Link className={cx('menu-item-link')}>Đăng xuất</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
