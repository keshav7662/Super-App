import React, { useState, useEffect } from 'react'
import './News.css'
import NewsImage from '../../../assets/newsImage.png'
const News = () => {
  const [newsData, setNewsData] = useState(null);
  const [currentDateTime, setCurrentDateTime] = useState(null);
  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-09-24&sortBy=publishedAt&apiKey=dd8c6954472c47efa56abdd33bdc1329');
        const data = await response.json();
        setNewsData(data.articles[0]);
      } catch (err) {
        console.log('something went wrong!')
      }
    }
    const updateDateTime = () => {
      const now = new Date();
      //Date
      let year = now.getFullYear();
      let mm = now.getMonth() + 1;
      let dd = now.getDate();

      let formattedDate = `${dd < 10 ? '0' + dd : dd}-${mm < 10 ? '0' + mm : mm}-${year}`
      //Time
      let hh = now.getHours();
      let min = now.getMinutes();
      let ampm = hh > 12 ? 'PM' : 'AM'
      hh = hh % 12;
      let formattedTime = `${hh ? hh : '12'} : ${min < 10 ? '0' + min : min} ${ampm}`

      setCurrentDateTime({
        date: formattedDate,
        time: formattedTime
      })
    }
    getNews();
    updateDateTime();
  }, [])
  return (
    <>
      <div className="news-card">
        <div className="news-image">
          {
            newsData ?
              <>
                <img src={newsData.urlToImage} alt="" />
                <div className="caption">
                  <h2>{newsData.title}</h2>
                  <p>{currentDateTime.date} | {currentDateTime.time}</p>
                </div>
              </>
              : <>Loading......</>
          }

        </div>
        <div className="news-data">
          {
            newsData ?
              <>
                <p>{newsData.description}</p>
                <p>{newsData.content}</p>
              </>
              : <>Loading....</>
          }
        </div>
      </div>
    </>
  )
}

export default News
