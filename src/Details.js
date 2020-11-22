import React, { useState, useEffect } from 'react'

const Details = (props) => {
  const [data, setData] = useState(props.location.state.data || {})
  useEffect(() => {
    setData(props.location.state.data)
  }, [props.location.state.data])
  console.log(data)
  return (
    <div key={data.title} className='singleNewsContainer'>
        <h2>{data.title}</h2>
      <div className='imageContainer'>
        <img alt='' src={data.urlToImage} />
      </div>

      <div className='newsContent'>
        
        <p>
          {data.content}
          <br/>
          This API is free News API so they do not allow me to have access to the whole content of the news.
          <br/>
          But You can read it in the news' original website  <a href={data.url}>here</a>
        </p>
      </div>

    </div>
  )
}

export default Details