import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Video from './components/Video';
import { router } from './router';
import {RouterProvider} from 'react-router-dom'
import { videoProps } from './interfaces/videoProps';
function App() {
  const [videos,setVideos] = useState<videoProps[]>([])

  return (
    <div className="App">
      {/* <Navbar cor="dark" fonte='letter'/>
      <h1>Videos inscritos</h1>
      <div className='videos-div'>
        
        {
          videos.map(v=><Video key={v.id} {...v}/>)
        }
      </div> */}
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
