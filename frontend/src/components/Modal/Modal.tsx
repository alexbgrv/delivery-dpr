import React, { ReactNode, FC, useState, useContext } from "react";
import "./style.css";
import { ModalContext } from "../../Context";
interface Props {
  children: ReactNode;
  title: string;
}

export const Modal: FC<Props> = ({ children, title }) => {

  const { closeModal } = useContext(ModalContext);

  const clickClose = () =>{
    closeModal()
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
