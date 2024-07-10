import React from 'react';
import styles from './Pagination.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Pagination({ currentPage, totalPages, onPageChange }) {
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <div className={cx('pagination')}>
            <button 
                className={cx('button', { disabled: currentPage === 1 })} 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            {[...Array(totalPages)].map((_, index) => (
                <button 
                    key={index} 
                    className={cx('button', { active: currentPage === index + 1 })} 
                    onClick={() => handlePageChange(index + 1)}
                >
                    {index + 1}
                </button>
            ))}
            <button 
                className={cx('button', { disabled: currentPage === totalPages })} 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;
