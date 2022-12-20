import axios from "axios";
import React, { useEffect, useState } from "react";
import "./PageSecond.css";

function PageSecond() {
  const [news, setnews] = useState([]);
  
  useEffect(()=>{
    try{
      const url ='https://newsapi.org/v2/top-headlines?country=us&apiKey=5a76ec9e227c47b1818d24d0f47d8107';
      async function fetchdata(){
        const res = await axios.get(url)
        setnews(res.data.articles)
      }
      fetchdata()
    } catch (error){
      console.log(error.message)
    }
    
  },[])

  return (
    <div className="PageSecond">
      <h1 >International News</h1>
      <div className="col">
      {news.length &&  news.map((news, i) => (
            <div key={i}>
              {i < 3 && (
                <div className="col1">
                  <img
                    src={
                      news.urlToImage
                        ? news.urlToImage
                        : "https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png"
                    }
                    className='si'
                  />
                  <div>
                 
                    <h3>{news.title}</h3>
                  </div>
                </div>
              
              )}
            </div>
          ))} 
      </div>
    </div>
  );
}

export default PageSecond;


// "https://newsapi.org/v2/top-headlines?country=us&apiKey=2add013863944943a18084027efb3053";