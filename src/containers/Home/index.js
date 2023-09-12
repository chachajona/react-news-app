import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { clearUserInfo } from "../../utils/Common";
import axios from "axios";

import NewsCard from "../../components/NewsCard";
import ThemeSwitcher from "../../components/ThemeSwitcher";

const Home = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const logout = async () => {
    navigate("/login");
    clearUserInfo();
  };

  useEffect(() => {
    setError("");
    axios("newsData.json")
      .then((res) => setNews(res.data));
  }, []);

  return (
    <div className="container mx-auto py-6">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">News App</h1>

        {/* Latest News Section */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Latest News</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        {/* All News Section */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">All News</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        <section className="mt-6">
          <ThemeSwitcher />
        </section>
    </div>
  );
};

export default Home;
