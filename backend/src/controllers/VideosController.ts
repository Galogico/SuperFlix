import {Video} from '../models/Videos'
import { Request,Response,RequestHandler } from 'express'
export class VideoController{
  static async getAllVideos(req:Request,res: Response){
    const videos = await Video.find();
    return res.status(200).json(videos)
  }
  static async createVideo(req: Request,res:Response){
    const {name,description,url} = req.body;
    if(!name){
      return res.status(404).json({message: "é preciso ter nome"})
    }
    if(!url){
      return res.status(404).json({message: "é preciso ter uma url de video"})
    }
    const newVideo = new Video({
      name: name,
      description: description,
      url: url
    })
    try {
      await newVideo.save()
      return res.status(201).json({message: "novo video cadastrado com sucesso",newVideo: newVideo})
    } catch (error) {
      return res.status(404).json({message: "Erro do servidor tente novamente em breve"})
    }
  }
}