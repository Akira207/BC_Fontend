import styles from './List.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import image from '~/images/image-test.jpg';

const cx = classNames.bind(styles);

function NewDocxPage() {
    return (
        <div className={cx('page-item')}>
            <div className={cx('', 'c-12')}>
                <div className={cx('page__title')}>Tài liệu mới đăng</div>
                <ul className={cx('list-docx')}>
                    <li className={cx('item', 'c-12')}>
                        <Link to="" className={cx('item-link', 'c-2', 'm-2-4')}>
                            <div className={cx('item-image')}>
                                <div className={cx('wapper-image', 'hover-block')}>
                                    <img src={image} alt="tên tài liệu" />
                                </div>
                            </div>
                        </Link>
                        <div className={cx('item-decription', 'c-9-6')}>
                            <Link to="">
                                <div className={cx('item-title')}>
                                    <span className={cx('item-title-text')}>Tên tài liệu</span>
                                </div>
                            </Link>
                            <Link to="">
                                <div className={cx('item-uploadBy')}>
                                    <span className={cx('item-title-text')}>Đăng bởi:</span>
                                </div>
                            </Link>
                            {/* <div className={cx('page__newdocx--decription')}>
                                <div className={cx('page__newdocx-icon')}>
                                    <i className={cx('favorite_icon', 'fa-solid', 'fa-heart')} data="like" />
                                    fa-regular fa-heart *
                                </div>
                                <div className={cx('page__newdocx-viewed')}>
                                    <span className={cx('viewed')}>1000</span> Viewed
                                </div>
                            </div> */}
                            <div className={cx('item-date')}>
                                Ngày đăng: <span className={cx('item-title-text')}>2022-05-01</span>
                            </div>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
}

export default NewDocxPage;
