import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink ,useParams, useNavigate, useLocation, Outlet } from 'react-router-dom';

const Details = () => {
  
  const location = useLocation();
  const state = location.state || {};

  const { newsId } = useParams();

  const [news, setNews] = useState(state.data);

  const navigate = useNavigate();

  useEffect(() => {
    if (!news) {
      axios('/data.json')
      .then((res) => {
        const data = res.data.find((item) => {
          return item.id === parseInt(newsId);
        });
        setNews(data);
      });
    }
  }, [newsId, news]);

  if (!news) {
    return null;
  }
  return (
    <div className="p-4 md:p-10">
      <section className="rounded-lg border-2 border-text flex flex-col p-5 md:p-10">
        <h1 className="text-3xl md:text-5xl mb-5">{news.title}</h1>
        <span>
          {news.date} by <strong>{news.author}</strong>
        </span>
        <img
          src={news.image}
          alt="???"
          className="w-full h-80 object-cover filter sepia-100 my-10"
        />
        <p className="text-lg md:text-xl text-justify">
          {news.content}
        </p>
        <button className="rounded-md border-2 border-text inline-block px-5 py-2 mt-10 bg-indigo-600 text-white" onClick={() => {
          navigate(-1);
        }}>
          Go Back
        </button>
      </section>
    </div>
  )
}

export default Details