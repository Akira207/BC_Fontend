import classNames from 'classnames/bind';
import styles from './ChildrenPages.scss';
import Docx from './Docx';
import FooterPage from './FooterPage';

const cx = classNames.bind(styles);

function ChildrenPages() {
    return (
        <div className={cx('page-wrapper', 'c-9-6')}>
            <Docx />    
        </div>
    );
}

export default ChildrenPages;
