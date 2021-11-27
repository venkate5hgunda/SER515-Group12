import React from 'react';
import { Pagination as ReactPagination } from 'react-bootstrap';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    let pageNumbers = [];
    let paginations = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
        paginations.push(
            <ReactPagination.Item key={i} onClick={() => paginate(i)}>{ i }</ReactPagination.Item>
        )
    }

    return (
        <nav>
            <ul className='pagination'>
                <ReactPagination>
                    {paginations}
                </ReactPagination>
            </ul>
        </nav>
    );
};

export default Pagination;