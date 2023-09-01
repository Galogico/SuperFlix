import { DELETED_USER, ERROR_ON_DELETED_USER, FAILED_DELETED_USER } from "../types/deleteVideoTypes";

export const deleteVideo = async (id:string)=>{
  try {
    const response = await fetch(`http://localhost:3001/videos/deleteUser/${id}`,{
      method: 'DELETE',
    });
    if(response.ok){
      console.log(DELETED_USER)
      return DELETED_USER
    }else{
      console.log(FAILED_DELETED_USER)
      return FAILED_DELETED_USER
    }
  } catch (error) {
    console.log(ERROR_ON_DELETED_USER)
    return ERROR_ON_DELETED_USER
  }
}