import {Router} from 'express';
const router = Router();
import {VideoController} from "../controllers/VideosController"

router
      .get("/",VideoController.getAllVideos)
      .post("/createVideo",VideoController.createVideo)
      .delete("/deleteVideo/:id",VideoController.deleteVideo)

export default router;
