import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getNews, getLatestNews } from "../../store/newsSlice";
import NewsCard from "../../components/NewsCard";

import { MoveRight } from "lucide-react";

const Home = () => {
  const news = useSelector((state) => state.news.news);
  const latestNews = useSelector((state) => state.news.latestNews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews(news));
    dispatch(getLatestNews(latestNews));
  }, [dispatch]);

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
        News App
      </h1>

      {/* Latest News Section */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          Latest News
        </h2>
        <div className="mt-2 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestNews.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* All News Section */}
      <section className="mt-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            All News
          </h2>
          <Link
            to="news"
            className="text-sm font-medium inline-flex text-indigo-600 hover:border-indigo-500 dark:text-indigo-100 mt-2"
          >
            See more <MoveRight />{" "}
          </Link>
        </div>
        <div className="mt-2 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {news.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}

          {latestNews.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
