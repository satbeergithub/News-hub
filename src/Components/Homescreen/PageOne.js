import React from "react";
import "./PageOne.css";
import axios from "axios";
import { useEffect, useState } from "react";
function PageOne() {
  const [news, setnews] = useState([]);

  useEffect(() => {
    try {
      async function fetchdata() {
        const url ='https://newsapi.org/v2/top-headlines?country=in&apiKey=5a76ec9e227c47b1818d24d0f47d8107'
        const res = await axios.get(url);
        console.log("res.data", res.data);
        setnews(res.data.articles);
      }
      fetchdata();
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  }, []);

  return (
    <>
     
      <div className="pageone">
        <h1>Trending News</h1>
        <div className="row">
          {news.length && (
            <div className="row1">
              <img
                src={
                  news[news.length - 2]?.urlToImage
                    ? news[news.length - 2]?.urlToImage
                    : "https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png"
                }
                className="bigimg"
              />
              <p>
                {new Date(
                  news[news.length - 2]?.publishedAt
                ).toLocaleDateString()}
              </p>
              <h2>{news[news.length - 2]?.title}</h2>
              <p>{news[news.length - 2]?.description}</p>
            </div>
          )}

          <div className="row2">
            {news.length &&
              news.map((news, i) => (
                <div key={i}>
                  {i < 3 && (
                    <div className="row21">
                      <img
                        src={
                          news.urlToImage
                            ? news.urlToImage
                            : "https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png"
                        }
                        className="smallimg"
                      />
                      <div>
                        <p>{new Date(news.publishedAt).toLocaleDateString()}</p>
                        <h3>{news.title}</h3>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
        <div className="hr"></div>
      </div>
    </>
  );
}

export default PageOne;
