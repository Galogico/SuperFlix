import React from 'react'
import "./Video.css"
import {BsTrash3Fill} from 'react-icons/bs';
import { videoProps } from '../interfaces/videoProps';
import { deleteVideo } from '../hooks/deleteVideo';


function Video(props: videoProps) {
  
  const deleteVideoHandler =()=>{
    const resHook = deleteVideo(props._id);
    console.log(resHook)
  }
  return (
    <div className='cardVideo'>
      <h2>{props.name}</h2>
      <iframe src={props.url} ></iframe>
      <p>
        {
          props.description ? props.description 
          : "não tem descrição"
        } 
      </p>
      <div>
        <div onClick ={()=>deleteVideoHandler()}>
          <BsTrash3Fill size={28} color="#ff2fff"/>
        </div>
      </div>
    </div>
  )
}

export default Video