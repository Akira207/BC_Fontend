import HeaderAdmin from './Header';
import Sidebar from './Sidebar';

import styles from '~/components/GlobalStyle/Adminstyle.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AdminLayout({ children }) {
    return (
        <div>
            <HeaderAdmin />
            <div className={cx('content', 'grid', 'wide')}>
                <div className={cx('row')}>
                    <Sidebar />
                    {children}
                </div>

            </div>
        </div>
    );
}

export default AdminLayout;
