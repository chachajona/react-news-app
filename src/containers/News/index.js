import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from '../../components/NewsCard';

const News = () => {
  const [news, setNews] = useState([]);
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    axios("newsData.json")
      .then((res) => setNews(res.data));
  }, []);

  useEffect(() => {
    axios("latestNewsData.json")
      .then((res) => setLatestNews(res.data));
  }, []);

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">All News</h1>
      <section className="mt-6">
        <div className="mt-2 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {news.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}

          {latestNews.map((article) => (
            <NewsCard key={article.id} article={article}/>
          ))}
        </div>
      </section>
    </div>
  )
}

export default News;