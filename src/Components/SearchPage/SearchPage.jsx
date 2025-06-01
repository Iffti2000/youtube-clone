import React, { useEffect, useState } from 'react'
import thumbnail1 from '../../assets/thumbnail1.png'
import Sidebar from '../Sidebar/Sidebar'
import './SearchPage.css' 
import { API_KEY } from '../../data'
import { Link, useParams } from 'react-router-dom'

const SearchPage = ({sidebar}) => {
  const [category,setCategory] = useState(null);
  const [data,setData] = useState([]);
  const { keyword } = useParams();

    const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  }
 
  const searchVideo = async (keyword) => {
      const searchVid_url = `https://youtube.googleapis.com/youtube/v3/search?order=viewCount&safeSearch=none&part=snippet&maxResults=25&q=${keyword}&key=${API_KEY}`;  
      const res = await fetch(searchVid_url);
      const data = await res.json();
      setData(data.items);
  } 
  
  useEffect(()=>{
    if(keyword){
      searchVideo(keyword)
    }
  },[keyword])

  return (
    <div className='search-page'>
    <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
     {data.map((item,index)=>{
      return(
      <Link to={`/video/0/${item.id.videoId}`} className='vid-list' key={index} onClick={scrollToTop}>
          <img src={item.snippet.thumbnails.medium.url} alt="" />
        <div className='vid-info' >
           <h3>{item.snippet.title}</h3>
           <h5>{item.snippet.channelTitle}</h5>
        </div>
     </Link>
      )
   })}      
    </div>
  )
}

export default SearchPage;
