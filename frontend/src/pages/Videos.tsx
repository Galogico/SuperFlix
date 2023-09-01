import React,{useState,useEffect} from 'react'
import { videoProps } from '../interfaces/videoProps' 
import Video from '../components/Video'
import {getVideosData} from '../hooks/getVideosData'
import { DELETED_VIDEO } from '../types/deleteVideoTypes'
function Videos() {
  const [videos,setVideos] = useState<videoProps[]>([])

  useEffect(()=>{
    getVideosData()
      .then((res:videoProps[])=>setVideos(res))
      .catch((err:any)=>console.log(err))
  },[])

  const deleteVideoWithSucccess = (resHook: string,id: string)=>{
    if (resHook == DELETED_VIDEO){
      setVideos(videos.filter(v => v._id !== id))
    }
  }
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