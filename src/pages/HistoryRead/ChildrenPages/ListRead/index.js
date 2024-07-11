import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ListRead.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import image from '~/images/image-test.jpg';
import { faClose, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Pagination from './Pagination';

const cx = classNames.bind(styles);

function ListRead() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10; // Số trang cần phân trang

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className={cx('page-item')}>
            <div className={cx('c-12')}>
                <div className={cx('page__title')}>Tài liệu đã đọc</div>
                <div className={cx('wrapper-list', 'c-12')}>
                    <ul className={cx('list-docx', 'c-10')}>
                        <li className={cx('c-12')}>
                            <div className={cx('wrapper-item', 'item')}>
                                <Link to="" className={cx('item-link', 'c-2', 'm-2-4')}>
                                    <div className={cx('item-image')}>
                                        <div className={cx('wapper-image', 'hover-block')}>
                                            <img src={image} alt="tên tài liệu" />
                                        </div>
                                    </div>
                                </Link>
                                <div className={cx('item-decription')}>
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

                                    <div className={cx('item-date')}>
                                        Ngày đăng: <span className={cx('item-title-text')}>2022-05-01</span>
                                    </div>
                                </div>
                                <div className={cx('icon-delete')}>
                                    <FontAwesomeIcon icon={faClose} />
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className={cx('delete-all', 'c-2')}>
                        <FontAwesomeIcon icon={faTrash} /> Xoá toàn bộ
                    </div>
                </div>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        </div>
    );
}

export default ListRead;
