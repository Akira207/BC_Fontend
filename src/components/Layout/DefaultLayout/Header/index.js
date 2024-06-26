import styles from './HeaderStyle.module.scss';
import classNames from 'classnames/bind';
import logo from '~/images/logo.jpg';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles)
function Header() {
    return (
        <header className={cx('header')}>
            <div className={cx('header__logo')}>
                <Link className={cx('header__logo-link')} to="/">
                    <img className={cx('header__logo-img')} src={logo} alt="logo" />
                </Link>
            </div>
            <div className={cx('c-o-3')} />
            <form action="#" className={cx('c-3', 'header__search')}>
                <input type="text" className={cx('header__search-input')} placeholder="Tìm kiếm" />
                <button className={cx('header__search-button')}>
                    <i className={cx('fas', 'fa-search')} />
                </button>
            </form>
            <div className={cx('c-o-4')} />
            {/* sau khi đăng nhập */}
            {/* <div class={cx('header__user')}>
                <a href="#">
                <div class={cx('header__user-icon')}>
                    <i class={cx('fa-regular', 'fa-user')}></i>
                </div>
                </a>
            </div> */}
            <div className={cx('header__login')}>
                <Link to="/login" className={cx('button')}>
                    Login
                </Link>
            </div>
        </header>
    );
}

export default Header;
