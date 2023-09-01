import React,{useState,useEffect} from 'react'
import { videoProps } from '../components/Video'
import Video from '../components/Video'
import {getVideosData} from '../hooks/getVideosData'
function Videos() {
  const [videos,setVideos] = useState<videoProps[]>([])

  useEffect(()=>{
    getVideosData()
      .then((res:videoProps[])=>setVideos(res))
      .catch((err:any)=>console.log(err))
  },[])
  return (
    <div>
       <h1>Videos inscritos</h1>
      <div className='videos-div'>
        
        {
          videos.map(v=><Video key={v._id} {...v}/>)
        }
      </div> 
    </div>
  )
}

export default Videos