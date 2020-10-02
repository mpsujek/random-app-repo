import React, { useState } from "react";
import Title from "./Title";
// import TestButton from "./TestButton";
import "./App.css";

function App() {
  const apiUrl =
    "http://newsapi.org/v2/top-headlines?country=us&apiKey=b8f99bccbe5b4cc5b9beee0556193eee";
  const [news, setNews] = useState(null);
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
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <button onClick={fetchNews}>Fetch news</button>
      </header>
      <div className="">
        {news &&
          news.map((singleNews, index) => (
            <div className="" key={index}>
              <div className="">{singleNews.title}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
