import classNames from 'classnames/bind';
import styles from './ChildrenPages.scss';

import NewDocxPage from './NewDocxPage';
import ReadPage from './ReadPage';
import FooterPage from './FooterPage';

const cx = classNames.bind(styles);

function ChildrenPages() {
    return (
        <div className={cx('page-wrapper', 'c-9-6')}>
            <div className={cx('page-main')}>
                <NewDocxPage />

                <ReadPage />
            </div>
            <FooterPage />
        </div>
    );
}

export default ChildrenPages;
