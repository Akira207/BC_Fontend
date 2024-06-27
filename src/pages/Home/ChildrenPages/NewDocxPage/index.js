import styles from './NewDocx.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import image from '~/images/image-test.jpg'

const cx = classNames.bind(styles);

function NewDocxPage() {
    return (
        <div className={cx('page-item')}>
            <div className={cx('page__newdocx', 'c-11')}>
                <div className={cx('page__title')}>
                    <Link to="">Tài liệu mới</Link>
                </div>
                <ul className={cx('page__newdocx-list')}>
                    <li className={cx('page__newdocx-item', 'c-2', 'm-2-4')}>
                        <Link to="" className={cx('page__newdocx-link')}>
                            <div className={cx('page__newdocx--image', 'hover-block')}>
                                <img src={image} alt="tên tài liệu" />
                            </div>
                            <div className={cx('page__newdocx--title')}>
                                <span className={cx('page__newdocx--title-text')}>Tên tài liệu</span>
                            </div>
                        </Link>
                        <div className={cx('page__newdocx--decription')}>
                            <div className={cx('page__newdocx-icon')}>
                                <i className={cx('favorite_icon', 'fa-solid', 'fa-heart')} data="like" />
                                {/* fa-regular fa-heart */}
                            </div>
                            <div className={cx('page__newdocx-viewed')}>
                                <span className={cx('viewed')}>1000</span> Viewed
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={cx('page__newdocx--nextItem', 'c-1')}>
                <div className={cx('page__newdocx--nextItem-icon')}>
                    <i className={cx('fa-solid', 'fa-chevron-right')} />
                </div>
            </div>
        </div>
    );
}

export default NewDocxPage;
