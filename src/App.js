import React, { useState } from "react";
import Title from "./Title";
import "./App.css";

function App() {
  const [news, setNews] = useState(null);

  //TODO: Export whole part with news to separate component
  //TODO: Improve styling now is mech
  //TODO: Add loading spinner

  const API_KEY = process.env.REACT_APP_NEWS_API;

  let apiUrl =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + API_KEY;

  function changeCountry(event) {
    const id = event.target.id;
    apiUrl =
      "https://newsapi.org/v2/top-headlines?country=" +
      id +
      "&apiKey=" +
      API_KEY;
    fetchNews();
  }

  function fetchNews() {
    console.log(apiUrl);
    fetch(apiUrl)
      .then((resp) => resp.json())
      .then((data) => {
        setNews(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <Title title={"Latest news"} />
        <div className="country_buttons">
          <p>Choose news for country, default is US</p>
          <button id="us" onClick={changeCountry}>
            us
          </button>
          <button id="pl" onClick={changeCountry}>
            pl
          </button>
        </div>
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
