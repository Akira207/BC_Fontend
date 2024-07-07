import styles from '~/components/GlobalStyle/Adminstyle.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faUser, 
    faFile, 
    faList, 
    faBarsStaggered, 
    faEye, 
    faBoxesPacking, 
    faBookAtlas, 
    faDownload, 
    faClockRotateLeft, 
    faPenNib 
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SidebarAdmin() {
    return (
        <div className={cx('col', 'c-2-4', 'm-3', 'l-2-4')}>
            <div className={cx('content__menu')} data="content-menu">
                <Link className={cx('btn')} to="#">
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faUser} />
                    </span>
                    <span className={cx('text')}>người dùng</span>
                </Link>
                <Link className={cx('btn')}>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faFile} />
                    </span>
                    <span className={cx('text')}>tài liệu</span>
                </Link>
                <Link className={cx('btn')}>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faList} />
                    </span>
                    <span className={cx('text')}>loại tài liệu</span>
                </Link>
                <Link className={cx('btn')}>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faBarsStaggered} />
                    </span>
                    <span className={cx('text')}>menu</span>
                </Link>
                <Link className={cx('btn')}>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faEye} />
                    </span>
                    <span className={cx('text')}>Lượt xem</span>
                </Link>
                <Link className={cx('btn')}>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faBoxesPacking} />
                    </span>
                    <span className={cx('text')}>nhà cung cấp</span>
                </Link>
                <Link className={cx('btn')}>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faBookAtlas} />
                    </span>
                    <span className={cx('text')}>nhà xuất bản</span>
                </Link>
                <Link className={cx('btn')}>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faDownload} />
                    </span>
                    <span className={cx('text')}>lượt tải</span>
                </Link>
                <Link className={cx('btn')}>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faClockRotateLeft} />
                    </span>
                    <span className={cx('text')}>nhật ký hoạt động </span>
                </Link>
                <Link className={cx('btn')}>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faPenNib} />
                    </span>
                    <span className={cx('text')}>tác giả</span>
                </Link>
            </div>
        </div>
    );
}

export default SidebarAdmin;
