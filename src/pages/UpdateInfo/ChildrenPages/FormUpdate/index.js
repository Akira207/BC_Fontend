import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './FormUpdate.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { faClose, faEye, faHeart, faUser, faXRay } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function FromUpdate() {
    return (
        <div className={cx('wrapper', 'c-12')}>
            <h2 className={cx('title')}>Cập Nhật Thông Tin</h2>
            <div className={cx('form-wrapper', 'c-12')}>
                <div className={cx('c-3')}></div>	
                <form action="/submit-form" method="post" className={cx('update-form', 'c-6')}>
                    <div className={cx('form-group')}>
                        <label htmlFor="password">Mật khẩu:</label>
                        <input type="password" id="password" name="password" className={cx('form-input')} required />
                    </div>
                    <div className={cx('form-group')}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" className={cx('form-input')} required />
                    </div>
                    <div className={cx('form-group')}>
                        <label htmlFor="phone">Số điện thoại:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className={cx('form-input')}
                            required
                            pattern="[0-9]{10}"
                        />
                    </div>
                    <div className={cx('form-group')}>
                        <label htmlFor="dateofbirth">Ngày sinh:</label>
                        <input type="date" id="dateofbirth" name="dateofbirth" className={cx('form-input')} required />
                    </div>
                    <div className={cx('form-group')}>
                        <label htmlFor="gender">Giới tính:</label>
                        <select id="gender" name="gender" className={cx('form-input')} required>
                            <option value="male">Nam</option>
                            <option value="female">Nữ</option>
                            <option value="other">Khác</option>
                        </select>
                    </div>
                    <button type="submit" className={cx('form-button', 'hover-block')}>
                        Cập Nhật
                    </button>
                </form>
            </div>
        </div>
    );
}

export default FromUpdate;
