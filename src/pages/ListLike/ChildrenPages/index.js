import classNames from 'classnames/bind';
import styles from './ChildrenPages.scss';
import List from './List';
import FooterPage from './FooterPage';
import Info from './Info';

const cx = classNames.bind(styles);

function ChildrenPages() {
    return (
        <div className={cx('page-wrapper', 'c-11')}>
            <div className={cx('page-main')}>
                <Info />
                <List />
            </div>
            <FooterPage />
        </div>
    );
}

export default ChildrenPages;
