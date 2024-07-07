import { Link } from "react-router-dom";
import styles from '~/components/GlobalStyle/Adminstyle.module.scss'
import classNames from 'classnames/bind';   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple, faUser } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function HeaderAdmin() {
    return (
        <header className={cx('header')}>
            <div className={cx('header__container', 'grid', 'wide')}>
                <div className={cx('logo', 'm-1', 'c-1')}>
                    <Link to="/">
                        <img src='' alt="logo" />
                    </Link>
                </div>
                <div className={cx('c-3', 'm-4', 'l-2')}>
                    <Link className={cx('btn')} to=''>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faChartSimple} />
                        </span>
                        <span className={cx('text')}>Thống kê</span>
                    </Link>
                </div>
                <div className={cx('c-o-7', 'm-o-5', 'l-o-7', 'header__user')}>
                    <div className={cx('user__avarar')}>
                        <Link to="">
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    </div>
                    <div className={cx('user__username')}>
                        <Link to=""> UserName </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderAdmin;
