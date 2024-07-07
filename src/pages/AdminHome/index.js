import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '~/components/GlobalStyle/Adminstyle.module.scss';
import classNames from 'classnames/bind';
import { faEye, faMagnifyingGlass, faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons';
import imgTest from '~/images/image-test.jpg'
const cx = classNames.bind(styles);

function AdminHome() {
    return (
        <div className={cx('col', 'c-9-6', 'm-9', 'l-9-6')}>
            <div className={cx('content__data')} data="content-data">
                <a href="#" className={cx('btn-shine')}>
                    Danh sách tài liệu{' '}
                </a>
                <form action="" className={cx('search__form')}>
                    <input
                        type="text"
                        autoComplete="off"
                        name="text"
                        className={cx('input')}
                        placeholder="Nhập tên tài liệu"
                    />
                    <button className={cx('btn-submit')} type="button">
                        <strong>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </strong>
                        <div id="container-stars">
                            <div id="stars" />
                        </div>
                        <div id="glow">
                            <div className={cx('circle')}/>
                            <div className={cx('circle')}/>
                        </div>
                    </button>
                </form>
                <a className={cx('btn-create')}>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faPlus} />
                    </span>
                    <span className={cx('text')}>Thêm mới tài liệu</span>
                </a>
                <div className={cx('content__data-stt')} data="statistical">
                    <table className={cx('custom-table')}>
                        <thead className={cx('table-dark')}>
                            <tr className={cx('table-dark-item')}>
                                <th>#</th>
                                <th>tài liệu</th>
                                <th>Tên tài liệu</th>
                                <th>Lượt xem</th>
                                <th>Lượt Tải</th>
                                <th>Xem</th>
                                <th>Sửa</th>
                                <th>Xóa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={cx('table-dark-item')}>
                                <td />
                                <td className={cx('block-img')} >
                                    <img src={imgTest} alt="" />
                                </td>
                                <td>java intern cv</td>
                                <td>0</td>
                                <td>0</td>
                                <td>
                                    <a className={cx('btn-view')}>
                                        <span className={cx('icon')}>
                                            <FontAwesomeIcon icon={faEye} />
                                        </span>
                                        <span className={cx('text')}>xem</span>
                                    </a>
                                </td>
                                <td>
                                    <a className={cx('btn-edit')}>
                                        <span className={cx('icon')}>
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                        </span>
                                        <span className={cx('text')}>sửa</span>
                                    </a>
                                </td>
                                <td>
                                    <a className={cx('btn-delete')}>
                                        <span className={cx('icon')}>
                                            <FontAwesomeIcon icon={faEye} />
                                        </span>
                                        <span className={cx('text')}>xóa</span>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    <br />
                    <div className={cx('radio-input')}>
                        <label>
                            <input
                                defaultValue="value-1"
                                name="value-radio"
                                id="value-1"
                                type="radio"
                                defaultChecked=""
                            />
                            <span>1</span>
                        </label>
                        <label>
                            <input defaultValue="value-2" name="value-radio" id="value-2" type="radio" />
                            <span>2</span>
                        </label>
                        <label>
                            <input defaultValue="value-3" name="value-radio" id="value-3" type="radio" />
                            <span>3</span>
                        </label>
                        <label>
                            <input defaultValue="value-3" name="value-radio" id="value-3" type="radio" />
                            <span>4</span>
                        </label>
                        <span className={cx('selection')} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminHome;
