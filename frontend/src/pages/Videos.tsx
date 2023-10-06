import React,{useState,useEffect} from 'react'
import { videoProps } from '../interfaces/videoProps' 
import Video from '../components/Video'
import {getVideosData} from '../hooks/getVideosData'
import { DELETED_VIDEO } from '../types/deleteVideoTypes'
import AddNewButton from '../components/Botao'
import axios from 'axios'
import Modal from '../components/Modal'

function Videos() {
  const [videos,setVideos] = useState<videoProps[]>([])
  const [showModal, setShowModal] = useState<boolean>(false)

  const mudarModal = ()=>{
    setShowModal((state)=>!state)
  }
  useEffect(()=>{
    getVideosData()
      .then((res:videoProps[])=>setVideos(res))
      .catch((err:any)=>console.log(err))
  },[])

  const createVideo = (name: string, description: string, url: string) => {
    axios.post<{ video: videoProps}>(`http://localhost:3001/videos/createVideo`, {name, description, url})
    .then((res) => {
      setVideos([...videos, res.data.video])
    })
    .catch((err) => console.log("erro ao cadastrar video", err));
  }


  const deleteVideoWithSucccess = (resHook: string,id: string)=>{
    if (resHook == DELETED_VIDEO){
      setVideos(videos.filter(v => v._id !== id))
    }
  }

  const editVideo = (_id: string, name: string, description: string, url: string) => {
    axios.put<{ video: videoProps }>(`http://localhost:3001/videos/editVideo/${_id}`, {_id, name, description, url})
    .then((res) => {
      const newUpdateVideos = videos.map((v) => (v._id === _id ? res.data.video : v));
      setVideos(newUpdateVideos);
    })
    .catch((err) => console.log("erro ao pegar os dados da api", err));
  }
  
  return (
    <div>
       <h1>Videos inscritos</h1>
      <AddNewButton abrirOModal={mudarModal} />
      {
        showModal ? <Modal onCreateVideo={createVideo} EditarVideo={ editVideo } fecharOModal={mudarModal}/> : null
      }
      <div className='videos-div'>
        
        {
          videos.map(v=><Video key={v._id} {...v}/>)
        }
      </div> 
    </div>
  )
}

export default Videos