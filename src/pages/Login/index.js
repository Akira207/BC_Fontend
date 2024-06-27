import classNames from 'classnames/bind';
import styles from './LoginStyle.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles);

function Login() {
    const [isActive, setIsActive] = useState(false);

    const handleRegisterClick = () => {
        setIsActive(true);
    };

    const handleLoginClick = () => {
        setIsActive(false);
    };

    return (
        <div className={cx('bgrLogin')}>
            <header>
                <h2 className={cx('logo')}>BC Online</h2>
                <nav className={cx('navigation')}>
                    <Link to="/">
                        <button className={cx('btnLogin-popup')}>Trở về</button>
                    </Link>
                </nav>
            </header>
            <div className={cx('wrapper', { active: isActive })}>
                <div className={cx('form-box', 'login')}>
                    <h2>Đăng nhập</h2>
                    <form action="#">
                        <div className={cx('input-box')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            <input type="email" required="" />
                            <label>Email</label>
                        </div>
                        <div className={cx('input-box')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faLock} />
                            </span>
                            <input type="password" required="" />
                            <label>Mật khẩu</label>
                        </div>
                        <div className={cx('remember-forgot')}>
                            <label>
                                <input type="checkbox" />
                                Lưu mật khẩu
                            </label>
                            <a href="#">Quên mật khẩu?</a>
                        </div>
                        <button type="submit" className={cx('btn')}>
                            Đăng nhập
                        </button>
                        <div className={cx('login-register')}>
                            <p>
                                Bạn không có tài khoản?{' '}
                                <a className={cx('register-link')} onClick={handleRegisterClick}>
                                    Đăng ký
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
                <div className={cx('form-box', 'register')}>
                    <h2>Đăng ký</h2>
                    <form action="#">
                        <div className={cx('input-box')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            <input type="text" required="" />
                            <label>Tên đăng nhập</label>
                        </div>
                        <div className={cx('input-box')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            <input type="email" required="" />
                            <label>Email</label>
                        </div>
                        <div className={cx('input-box')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faLock} />
                            </span>
                            <input type="password" required="" />
                            <label>Mật khẩu</label>
                        </div>
                        <div className={cx('remember-forgot')}>
                            <label>
                                <input type="checkbox" />
                                Bạn đã đọc và đồng ý với điều khoản của chúng tôi
                            </label>
                        </div>
                        <button type="submit" className={cx('btn')}>
                            Đăng ký
                        </button>
                        <div className={cx('login-register')}>
                            <p>
                                Bạn đã có tài khoản?
                                <a className={cx('login-link')} onClick={handleLoginClick}>
                                    {' '}
                                    Đăng nhập
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
