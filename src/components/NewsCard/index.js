import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ article }) => {
  return (
    <Link 
      to={{
        pathname: `/news/${article.id}`,
        state: {
          data: article
        }
      }}
    >
      <div className="max-w-md mx-auto bg-white dark:bg-gray-600 rounded-xl shadow-md overflow-hidden flex flex-col">
        <img className="h-48 w-full object-cover" src={article.image} alt={article.title} />

        <div className="px-4 py-2 grow">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{article.title}</h2>
          <p className="mt-2 text-gray-600 dark:text-white">{article.content}</p>
        </div>

        <div className="px-4 py-2 bg-gray-100 dark:bg-gray-400 flex justify-between items-end">
          <span className="text-sm text-gray-600 dark:text-white">{article.date}</span>
          <span className="ml-2 text-sm text-indigo-600 dark:text-indigo-100">{article.category}</span>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
