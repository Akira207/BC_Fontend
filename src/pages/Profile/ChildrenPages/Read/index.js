import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Read.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { faClose, faEye, faHeart, faUser, faXRay } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Read() {
    return (
        <div className={cx('wrapper', 'c-12')}>
            <Link className={cx('title')} to="">
                Tài liệu đã đọc
            </Link>
            <div className={cx('list-reading', 'c-12')}>
                <table className={cx('table-border')}>
                    <thead>
                        <tr>
                            <th className={cx('th-name')}>Tên tài liệu</th>
                            <th className={cx('th-uploader')}>Người đăng</th>
                            <th className={cx('th-date')}>Ngày đọc</th>
                            <th className={cx('th-actions')} colSpan="2">Thao tác</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={cx('ellipsis')}>Tài liệu 1</td>
                            <td className={cx('ellipsis')}>Người A</td>
                            <td className={cx('read-date')}>2022-05-01</td>
                            <td>
                                <Link className={cx('')}>
                                    <span className={cx('icon')}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </span>
                                    Đọc ngay
                                </Link>
                            </td>
                            <td>
                                <Link className={cx('')}>
                                    <span className={cx('icon')}>
                                        <FontAwesomeIcon icon={faClose} />
                                    </span>
                                    Xoá
                                </Link>
                            </td>
                        </tr>

                        <tr>
                            <td className={cx('ellipsis')}>...</td>
                            <td className={cx('ellipsis')}>...</td>
                            <td>...</td>
                            <td>
                                ...
                            </td>
                            <td>
                                ...
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Read;
