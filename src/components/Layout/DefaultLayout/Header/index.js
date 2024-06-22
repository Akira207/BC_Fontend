import './HeaderStyle.scss';
import logo from '~/images/logo.jpg';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <Link className="header__logo-link" to ="/">
                    <img className="header__logo-img" src={logo} alt="logo" />
                </Link>
            </div>
            <div className="c-o-3" />
            <form action="#" className="c-3 header__search">
                <input type="text" className="header__search-input" placeholder="Tìm kiếm" />
                <button className="header__search-button">
                    <i className="fas fa-search" />
                </button>
            </form>
            <div className="c-o-4" />
            {/* sau khi đăng nhập */}
            {/* <div class="header__user">
                <a href="#">
                <div class="header__user-icon">
                    <i class="fa-regular fa-user"></i>
                </div>
                </a>
            </div> */}
            <div className="header__login">
                <Link to="/login" className="button">
                    Login
                </Link>
            </div>
        </header>
    );
}

export default Header;
