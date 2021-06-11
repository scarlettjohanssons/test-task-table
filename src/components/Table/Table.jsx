import React, { useState, useEffect } from 'react';
import './Table.scss';
import { request } from '../../api/api.js'
import { Pagination } from '../Pagination'

export const Table = () => {

  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsOnPage] = useState(10);
  const [sort, setSort] = useState('');
  
  const indexOfLastNews = currentPage * newsOnPage;
  const indexOfFirstNews = indexOfLastNews - newsOnPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  useEffect(() => {
    request()
      .then(result => setNews(result));
  }, []);


  const paginate = (pageNumber) => {
    return setCurrentPage(pageNumber);
  }

  currentNews.sort((first, second) => {
    switch (sort) {
      case 'time':
        return first.time - second.time;
      case 'title':
        return first.title.localeCompare(second.title);
      case 'domain':
        if (first.domain && second.domain) {
          return first.domain.localeCompare(second.domain);
        }
        return first;
      default:
        return 0;
    }
  });

  const handleClick = (url) => {
    window.open(url);
  }

  return (
    <>
      <button
        className='sort-by-date-mobile'
        onClick={() => {
          setSort('time')
        }}
      >
        Sort by date
      </button>
      <table className='table'>
        <thead>
          <tr>
            <th
              className="th th-time"
              onClick={() => {
                setSort('time')
              }}
            >
              TIME ADDED
            </th>
            <th
              className="th th-title"
              onClick={() => {
                setSort('title')
              }}
            >
              TITLE
            </th>
            <th
              className="th th-domain"
              onClick={() => {
                setSort('domain')
              }}
            >
              DOMAIN
            </th>
          </tr>
        </thead>
        {currentNews.map(article => (
          <tbody key={article.id}>
            <tr className='entry' onClick={() => handleClick(article.url)}>
              <td className="td td-time">
                {article.time}
              </td>
              <td className="td td-title">
              <div className='title'>
                {article.title}
              </div>
              </td>
              <td className="td td-domain">{article.domain}</td>
            </tr>
          </tbody>
        ))}
      </table>
      <Pagination newsOnPage={newsOnPage} allNews={news.length} paginate={paginate} />
    </>
  )
}
