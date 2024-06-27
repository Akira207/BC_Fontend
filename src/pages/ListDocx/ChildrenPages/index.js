import classNames from 'classnames/bind';
import styles from './ChildrenPages.scss';
import List from './List';
import FooterPage from './FooterPage';

const cx = classNames.bind(styles);

function ChildrenPages() {
    return (
        <div className={cx('page-wrapper', 'c-9-6')}>
            <div className={cx('page-main')}>
                <List />
            </div>
            <FooterPage />
        </div>
    );
}

export default ChildrenPages;
