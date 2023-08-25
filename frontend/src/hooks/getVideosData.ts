export const getVideosData =async()=>{
  const getData = await fetch("http://localhost:3001/videos")
  const json = await getData.json()
  return json
}