import classNames from 'classnames/bind';
import styles from './ChildrenPages.scss';

import Read from './FormUpdate';
import FooterPage from './FooterPage';


const cx = classNames.bind(styles);

function ChildrenPages() {
    return (
        <div className={cx('page-wrapper', 'c-11')}>
            <div className={cx('page-main')}>
                <Read />
            </div>
            <FooterPage />
        </div>
    );
}

export default ChildrenPages;
