import React from "react";
import NewsItem from "../NewsItem/NewsItem";
import "./News.css";

const News = ({ NewsList }) => {
  const newItem = NewsList.map(item => {
    return (
      <NewsItem
        sourcename={item.sourcename}
        author={item.author}
        title={item.title}
        description={item.description}
        url={item.url}
        urlToImage={item.urlToImage}
        publishedAt={item.publishedAt}
        content={item.content}
      />
    );
  });

  return newItem;
};

export default News;
