import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Like.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { faClose, faEye, faHeart, faUser, faXRay } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Like() {
    return (
        <div className={cx('wrapper', 'c-12')}>
            <Link className={cx('title')} to="">
                Yêu thích
            </Link>
            <div className={cx('list-like', 'c-12')}>
                <table className={cx('table')}>
                    <thead>
                        <tr>
                            <th className={cx('th-name')}>Tên tài liệu</th>
                            <th className={cx('th-actions')}>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={cx('ellipsis')}>
                                <Link>Tài liệu 1</Link>
                            </td>

                            <td>
                                <Link className={cx('td-active')}>
                                    <span className={cx('icon')}>
                                        <FontAwesomeIcon icon={faClose} />
                                    </span>
                                    Xoá
                                </Link>
                            </td>
                        </tr>

                        <tr>
                            <td className={cx('ellipsis')}>...</td>

                            <td>
                                <Link className={cx('td-active')}>
                                    ....
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Like;
