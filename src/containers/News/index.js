import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNews, getLatestNews } from "../../store/newsSlice";
import NewsCard from '../../components/NewsCard';

import store from "../../store";
import newsReducer from "../../store/newsSlice";
import newsSaga from "../../saga/newsSaga";

store.injectReducer("news", newsReducer);
store.injectSaga("news", newsSaga);

const News = () => {
  const news = useSelector((state) => state.news.news);
  const latestNews = useSelector((state) => state.news.latestNews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews(news));
    dispatch(getLatestNews(latestNews));
  }, [dispatch]);

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