import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPlus, faRotateRight } from '@fortawesome/free-solid-svg-icons';
import styles from '~/components/GlobalStyle/Adminstyle.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AdminCreat() {
    return (
        <div className={cx('col', 'c-9-6', 'm-9', 'l-9-6')}>
            <div className={cx('content__data')} data="content-data">
                <a href="#" className={cx('btn-shine')}>
                    Thêm mới tài liệu
                </a>
                <a className={cx('btn-create')} href="/DocumentAdmin.html">
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </span>
                    <span className={cx('text')}>Quay lại danh sách</span>
                </a>
                <br />
                <br />
                <hr />
                <div className={cx('content__data-stt')} data="statistical">
                    <div className={cx('group')}>
                        <label className={cx('lb_name')}>Tên tài liệu</label>
                        <input className={cx('input')} type="text" placeholder="Nhập tên tài liệu" />
                    </div>
                    <div className={cx('group__select')}>
                        <div className={cx('group_category')}>
                            <label className={cx('lb_category')}>Loại tài liệu</label>
                            <select name="" id="" className={cx('select__category')}>
                                <option value="">Chọn loại tài liệu</option>
                                <option value="">loại tài liệu 1</option>
                                <option value="">loại tài liệu 2</option>
                                <option value="">loại tài liệu 3</option>
                            </select>
                        </div>
                        <div className={cx('group_author')}>
                            <label className={cx('lb_author')}>Tác giả</label>
                            <select name="" id="" className={cx('select__author')}>
                                <option value="">Chọn loại tác giả</option>
                                <option value="">tác giả 1</option>
                                <option value="">tác giả 2</option>
                            </select>
                        </div>
                    </div>
                    <div className={cx('group__select')}>
                        <div className={cx('group_category')}>
                            <label className={cx('lb_category')}>Nhà cung cấp</label>
                            <select name="" id="" className={cx('select__category')}>
                                <option value="">Chọn nhà cung cấp</option>
                                <option value="">item 1</option>
                                <option value="">item 2</option>
                                <option value="">item 3</option>
                            </select>
                        </div>
                        <div className={cx('group_author')}>
                            <label className={cx('lb_author')}>Nhà xuất bản</label>
                            <select name="" id="" className={cx('select__author')}>
                                <option value="">Chọn nhà xuất bản</option>
                                <option value="">item 1</option>
                                <option value="">item 2</option>
                            </select>
                        </div>
                    </div>
                    <div className={cx('group__select')}>
                        <div className={cx('group_category')}>
                            <label className={cx('lb_category')}>Danh mục</label>
                            <select name="" id="" className={cx('select__category', 'menu_document')}>
                                <option value="">Chọn danh mục</option>
                                <option value="">item 1</option>
                                <option value="">item 2</option>
                                <option value="">item 3</option>
                            </select>
                        </div>
                        <div className={cx('group_author')}>
                            <label className={cx('lb_author')}>Trạng thái</label>
                            <select name="" id="" className={cx('select__author', 'status_document')}>
                                <option value="">Chọn trạng thái</option>
                                <option value="">item 1</option>
                                <option value="">item 2</option>
                            </select>
                        </div>
                    </div>
                    <div className={cx('group__select')}>
                        <div className={cx('group_category')}>
                            <label className={cx('lb_category')}>Mô tả</label>
                            <textarea name="" className={cx('text_mota')} id="" defaultValue={''} />
                        </div>
                    </div>
                    <div className={cx('group__select')}>
                        <div className={cx('group_category')}>
                            <label className={cx('lb_file')}>Chọn file tài liệu</label>
                            <div className={cx('input-file-container')}>
                                <input type="file" id="input-file" className={cx('input-file')} accept=".pdf" />
                                <label htmlFor="input-file" className={cx('file-label')}>
                                    Chọn file
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={cx('group__select')}>
                        <div className={cx('group_category')}>
                            <iframe
                                src="./assets/images/DocumentImages/CV_JAVA_INTERN.pdf"
                                className={cx('view_file')}
                                aria-readonly="true"
                            />
                        </div>
                    </div>
                </div>
                <div className={cx('group__select')}>
                    <div className={cx('group_category')}>
                        <a className={cx('btn-create_form')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faPlus} />
                            </span>
                            <span className={cx('text')}>Thêm mới</span>
                        </a>
                        <a className={cx('btn-create_reset')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faRotateRight} />
                            </span>
                            <span className={cx('text')}>Reset</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminCreat;
