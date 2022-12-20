import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
function Business() {
   const [news,setnews] =useState([])
   useEffect(()=>{
    try{
      async function fethdata(){
           const url ='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5a76ec9e227c47b1818d24d0f47d8107'
           const res = await axios.get(url)
           setnews(res.data.articles)
           console.log(res.data)
      }
      fethdata()
    }
    catch(error){
        console.log(error.message);
    }
   },[])
  return (
    <div className='homescreen'>
        <Navbar/>
        <h1>Business News</h1>
        <div className='business'>
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
                    <span>{news.description}</span>
                  </div>
                </div>
              )}
            </div>
          ))} 
        </div>
        

    </div>
    
  )
}

export default Business