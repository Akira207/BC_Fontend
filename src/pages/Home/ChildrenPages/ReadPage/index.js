import styles from './ReadPage.module.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

function ReadPage() {
    return (
        <div className={cx('page-item', 'c-12')}>
            <div className={cx('page__reading-history')}>
                <div className={cx('page__title')}>
                    <a href="#">Đã đọc</a>
                </div>
                {/* <div className={cx('page__reading-history--noLogin')}>
                    <span href="#">Bạn phải đăng nhập để sử dụng chức năng này</span>
                    <i className="fa-regular fa-hand-point-right"></i>
                    <a href="/login.html" className={cx('button')}>Login</a>
                </div> */}
                <div className={cx('page__reading-history--noHis')}>
                    <span href="#">Hãy thử đọc một tài liệu bất kỳ</span>
                    <i className="fa-regular fa-hand-point-right" />
                    <a href="#" className={cx('button')}>
                        Danh sách tài liệu
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ReadPage;
