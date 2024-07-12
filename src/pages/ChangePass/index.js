import classNames from 'classnames/bind';
import styles from './ChangePass.module.scss';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faLock } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ChangePass() {
    return (
        <div className={cx('bgrLogin')}>
            <header className={cx('header')}>
                <h2 className={cx('logo')}>BC Online</h2>
                <nav className={cx('navigation')}>
                    <Link to="/">
                        <button className={cx('btnLogin-popup')}>Trở về</button>
                    </Link>
                </nav>
            </header>
            <div className={cx('wrapper')}>
                <div className={cx('form-box', 'login')}>
                    <h2>Đổi mật khẩu</h2>
                    <form action="#">
                        <div className={cx('input-box')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faEye} />
                            </span>
                            <input type="email" required="" />
                            <label>Mật khẩu cũ</label>
                        </div>
                        <div className={cx('input-box')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faLock} />
                            </span>
                            <input type="password" required="" />
                            <label>Mật khẩu mới</label>
                        </div>
                        <div className={cx('input-box')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faLock} />
                            </span>
                            <input type="password" required="" />
                            <label>Xác nhận lại</label>
                        </div>
                        <button type="submit" className={cx('btn')}>
                            Xác nhận
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ChangePass;
