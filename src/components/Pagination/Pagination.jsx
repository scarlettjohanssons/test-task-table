import React from 'react';
import './Pagination.scss';

export const Pagination = ({ newsOnPage, allNews, paginate }) => {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allNews / newsOnPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className='list'>
      {pageNumbers.map(number => (
        <li key={number}>
          {/* eslint-disable-next-line */}
          <a className='list__link' onClick={() => paginate(number)} href='#'>{number}</a>
        </li>
      ))}
    </ul>
  )
}
