import styles from './Docx.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import image from '~/images/image-test.jpg';

const cx = classNames.bind(styles);

function NewDocxPage() {
    return (
        <div className={cx('item-decription', 'c-3')}>
            <div className={cx('item-title')}>Tên tài liệu</div>
            
        </div>
    );
}

export default NewDocxPage;
