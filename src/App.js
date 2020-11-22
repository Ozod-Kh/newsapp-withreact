import React, { useState, useEffect } from 'react'
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  withRouter
} from "react-router-dom";

function App() {
  const [news, setNews] = useState([])

  
  useEffect(() => {
    fetchNews()
    

  }, [])

  const fetchNews = () => {
    var url = 'http://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      'apiKey=2211afc7e14741eeaf91a6e6f21015d1';
    var req = new Request(url);
    fetch(req)
      .then(res => res.json())
      .then(data => {
        setNews(data.articles)
      })
  }

  

  let history = useHistory();
  const redirect = (item) => {
    history.push({
      pathname: '/details',
      state: { data: item }
    })
     
     
  }


  

  return (
    <div className="appContainer">
      <div>
        <h1>World's Breaking News</h1>
      </div>
      {news.map(item => {
        return (
          <div key={item.title} className='newsContainer'>

            <div className='newsImageContainer'>
              <img alt='' src={item.urlToImage} />
            </div>

            <div className='newsInfoContainer'>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span onClick={() => {
                redirect(item)
              }}>
                Read more...
              </span>
            </div>

          </div>

        )
      })}



    </div>
  );
}

export default App;
