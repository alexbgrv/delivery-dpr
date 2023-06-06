import React, { ReactNode, FC, useState, useContext } from "react";
import ReactDOM from 'react-dom';
import "./style.css";
import { ModalContext } from "../../Context";
import { Controls } from "../../components/controls/controls"
interface Props {
  children: ReactNode;
  title: string;
}

export const Modal: FC<Props> = ({ children, title }) => {

  const { closeModal } = useContext(ModalContext);

  const clickClose = (event: React.MouseEvent<HTMLButtonElement>) =>{
    const widgetContainer = document.querySelector('.conteiner-Widget') as HTMLElement;
    
    widgetContainer.style.display = 'flex';
    const button = event.target as HTMLButtonElement;
    button.style.display = "block";
    closeModal();
  }
  
  return (
    <div className="backdrop">
      
      <div className="modal">
        <div className="modal-header">
          <button onClick={clickClose} className="btn-close">X</button>
            <h3>{title}</h3>
        </div>
          <div className="modal-body">
            {children} 
            <div className="searchMarket">
              <input type="text" /><button>text</button>
            </div>
          </div>
      </div>
    </div>
  );
};
