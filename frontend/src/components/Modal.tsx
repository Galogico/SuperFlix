import React from 'react';
import { AiFillCloseCircle} from 'react-icons/ai';
import { ModalProps } from '../interfaces/modalProps';
import Form from './Form';
import "./Modal.css";

function Modal(props: ModalProps){
  return (
    <div className='fundo'>
      <div className='closeModal' onClick={() => {props.fecharOModal(); localStorage.clear(); }}>
        <AiFillCloseCircle size={40} color='black' />
      </div>
      <div>
        <Form FecharModal={props.fecharOModal} Editar={props.EditarVideo} onCreateVideo={props.onCreateVideo} />
      </div>
    </div>
  )
}

export default Modal;