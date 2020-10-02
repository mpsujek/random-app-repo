import React, { useState } from "react";
import Title from "./Title";
import "./App.css";

function App() {
  const [news, setNews] = useState(null);

  //TODO: Add option to change country
  //TODO: Export whole part with news to separate component
  //TODO: Improve styling now is mech
  //TODO: Add loading spinner
  const apiUrl =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=b8f99bccbe5b4cc5b9beee0556193eee";

  function fetchNews() {
    fetch(apiUrl)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setNews(data);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <Title title={"Latest news"} />
        <button onClick={fetchNews}>Fetch news</button>
      </header>
      <div className="news-container">
        {news &&
          news.articles.map((singleNews, index) => {
            return (
              <div className="single-news" key={index}>
                <a
                  href={singleNews.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {singleNews.title}
                  <img src={singleNews.urlToImage} alt="" />
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
