import styles from './FooterPage.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function FooterPage() {
    return (
        <footer className={cx('page-footer')}>
            <div className={cx('footer-row', 'c-12')}>
                <div className={cx('footer__logo')}>
                    <Link to="/" className={cx('logo-text')}>
                        BC Online
                    </Link>
                </div>
            </div>
            <div className={cx('footer-row', 'c-12')}>
                <div className={cx('footer-col', 'c-4')}>Fontend</div>
                <div className={cx('footer-col', 'c-4')}>PLT</div>
                <div className={cx('footer-col', 'c-4')}>Kiriphan1801@gmail.com</div>
            </div>
            <div className={cx('footer-row', 'c-12')}>
                <div className={cx('footer-col', 'c-4')}>Backend</div>
                <div className={cx('footer-col', 'c-4')}>NNT</div>
                <div className={cx('footer-col', 'c-4')}>NNT@gmail.com</div>
            </div>
        </footer>
    );
}

export default FooterPage;
