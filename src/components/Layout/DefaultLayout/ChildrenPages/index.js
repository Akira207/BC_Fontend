import classNames from 'classnames/bind';
import styles from './ChildrenPages.module.scss'
import NewDocxPage from './NemDocxPage';


const cx = classNames.bind(styles);

function ChildrenPages() {
    return (
        <>
        <div className={cx('page-wrapper', 'c-9-6')}>
            <div className={cx('page-main')}>
                <NewDocxPage />
            </div>
        </div>
        </>
        
    );
}

export default ChildrenPages;
