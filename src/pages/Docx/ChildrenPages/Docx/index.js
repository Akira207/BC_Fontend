import React, { useState } from 'react';
import styles from './Docx.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faDownload, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PdfViewer from './PdfViewer'; // Import component PdfViewer
import FooterPage from '../FooterPage';

const cx = classNames.bind(styles);

function Docx() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    const wrapperDescritionStyle = {
        width: isActive ? '25%' : '0%',
        opacity: isActive ? '1' : '0',
        transition: 'all ease-in-out 0.75s',
    };

    const wrapperDocxStyle = {
        width: isActive ? '75%' : '100%',
        transition: 'all ease-in-out 0.75s',
    };

    const handleDownload = () => {
        const pdfUrl = '/iloveyou.pdf'; // Đường dẫn đến file PDF, bạn có thể thay đổi tùy ý
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.setAttribute('download', 'ten-file.pdf'); // Đặt tên file khi tải xuống
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={cx('wapper', 'row', 'no-gutters')}>
            <div className={cx('wrapper-descrition')} style={wrapperDescritionStyle}>
                <div className={cx('item-descrition')}>
                    <div className={cx('title')}>Tên tài liệu</div>
                    <div className={cx('updateBy')}>
                        Đăng bởi:{' '}
                        <Link className={cx('updateBy-name')} to="">
                            Kira
                        </Link>
                    </div>
                    <div className={cx('updateDay')}>
                        Cập nhật lần cuối: <span className={cx('DayText')}>12/01/2022</span>
                    </div>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faDownload} />
                        <span className={cx('count')}>100</span>
                    </div>
                    <div className={cx('icon', 'icon-heart')}>
                        <FontAwesomeIcon icon={faHeart} />
                        <span className={cx('count')}>5</span>
                    </div>
                    <div className={cx('decription')}>
                        Mô tả tài liệu:
                        <div className={cx('decription-text')}>viết linh tinh gì đó</div>
                    </div>
                    <div className={cx('download')}  onClick={handleDownload}>
                        <span className={cx('linkDownload')}>
                            Download
                        </span>
                    </div>
                </div>
            </div>
            <div className={cx('wrapper-notOverflow')} style={wrapperDocxStyle}>
                <div className={cx('zoom', { active: isActive })} onClick={handleClick}>
                    <FontAwesomeIcon icon={isActive ? faArrowLeft : faArrowRight} />
                </div>

                <div className={cx('wrapper-docx')}>
                    <div className={cx('docx')}>
                        <PdfViewer url="/iloveyou.pdf" />
                    </div>
                    <FooterPage />
                </div>
            </div>
        </div>
    );
}

export default Docx;
