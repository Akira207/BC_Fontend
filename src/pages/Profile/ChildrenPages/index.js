import classNames from 'classnames/bind';
import styles from './ChildrenPages.scss';
import Info from './Info';
import FooterPage from './FooterPage';

const cx = classNames.bind(styles);

function ChildrenPages() {
    return (
        <div className={cx('page-wrapper', 'c-11')}>
            <div className={cx('page-main')}>
                <Info />
            </div>
            <FooterPage />
        </div>
    );
}

export default ChildrenPages;
