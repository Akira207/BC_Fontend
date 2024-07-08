import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Info.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Info() {
    return (
        <div className={cx('wrapper', 'c-12')}>
            <div className={cx('c-3', 'user-info')}>
                <div className={cx('user-text')}>
                    User Name: <span className={cx('user-data')}>Kira</span>
                </div>
                <div className={cx('user-text')}>
                    Ngày sinh: <span className={cx('user-data')}>18/01/2003</span>
                </div>
                <div className={cx('user-text')}>
                    Quyền hạn: <span className={cx('user-data')}>Người dùng</span>
                </div>
            </div>
            <div className={cx('c-3', 'user-interact')}>
                <div className={cx('user-text')}>
                    <FontAwesomeIcon icon={faHeart} />
                    <span className={cx('user-data')}> 3</span>
                </div>
                <div className={cx('user-text')}>
                    Ngày sinh: <span className={cx('user-data')}>18/01/2003</span>
                </div>
                <div className={cx('user-text')}>
                    Quyền hạn: <span className={cx('user-data')}>Người dùng</span>
                </div>
            </div>
        </div>
    );
}

export default Info;

{
    /* <div className={cx('page__newdocx--decription')}>
                                <div className={cx('page__newdocx-icon')}>
                                    <i className={cx('favorite_icon', 'fa-solid', 'fa-heart')} data="like" />
                                    fa-regular fa-heart *
                                </div>
                                <div className={cx('page__newdocx-viewed')}>
                                    <span className={cx('viewed')}>1000</span> Viewed
                                </div>
                            </div> */
}
