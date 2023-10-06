import React, {useState, useEffect} from "react";
import "./Form.css";
import { FormProps } from "../interfaces/formProps";

function Form(props: FormProps){
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [editMode, setEdit] = useState<boolean>(false);

  useEffect(()=> {
    let id = localStorage.getItem("id")
    let storedTitle = localStorage.getItem("title")
    let description = localStorage.getItem("description")
    let storedUrl = localStorage.getItem("url")
    if(id !== null){
      setEdit(true);
      setDesc(description || "");
      setTitle(storedTitle || "");
      setUrl(storedUrl || "");
    }else{
      setEdit(false);
    }
  }, []);

  const handleCreateVideo = () =>{
    if(editMode){
      let id = localStorage.getItem("id");
      setTitle("");
      setDesc("");
      setUrl("");
    }
    else {
      props.onCreateVideo(title, desc, url);
    }

    setTitle("");
    setDesc("");
    setUrl("");
    props.onCreateVideo(title, desc, url)
  }

  const envioForm = (e: React.FormEvent) => {
    e.preventDefault();
    handleCreateVideo();
  }

  return (
    <form onSubmit={envioForm} className={"form"}>
      <h1>"Adicionar vídeo</h1>
      <label htmlFor="title">Titulo</label>
      <input
        type="text"
        placeholder="Título do vídeo"
        name ="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="description">Descrição</label>
      <input
        type="text"
        placeholder="Descrição do vídeo"
        name ="description"
        id="description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <label htmlFor="url">URL</label>
      <input
        type="text"
        placeholder="URL do vídeo"
        name ="url"
        id="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit">Cadastrar vídeo</button>
    </form>
  )
}

export default Form;