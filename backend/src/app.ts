import express ,{Response,Request} from 'express';
import {json} from 'body-parser'
const app = express()
app.use(json())
import cors from 'cors';
app.use(cors())
import VideoRouter from './routes/VideoRoutes'
app.use("/videos",VideoRouter)

app.get("/oi",(req: Request,res: Response)=>{
  res.send("bem vindo")
})
app.post("/saymyname",(req: Request,res: Response)=>{
  const {nome} = req.body;
  if (nome == "Loky"){
    return res.send("LOOOOOKYYYYYYYYYYY")
  }else{
    return res.status(200).send("bem vindo")
  }
})

app.listen(3001,()=>{
  console.log("api rodando")
})


import {connect} from './database/config'
connect()
