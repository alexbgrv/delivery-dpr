import React, { ReactNode, useState } from "react"; 
import { ModalContext } from "./ModalContext"; 
import { Modal } from "../../components"

interface ModalProviderProps {
  children: ReactNode;
}


export const ModalProvider = ({ children }: ModalProviderProps) => {


  const [modalOpened, setModalOpened] = useState(false); 
  const [modalContent, setModalContent] = useState<ReactNode | null>(null); 

  const openModal = (modalConfig: { imgLogo: ReactNode; content: ReactNode }) => {
    
    const { imgLogo, content } = modalConfig;
    setModalOpened(true);
    setModalContent(<div><h2>{imgLogo}</h2>{content}</div>); 
  };

  const closeModal = () => {
    setModalOpened(false);
    setModalContent(null); 
  };

  const modalState = { modalOpened, modalContent, openModal, closeModal }; 

  return (
    <ModalContext.Provider value={modalState}>
      {modalOpened && <Modal title="">{modalContent}</Modal>}
     
      {children}
    </ModalContext.Provider>
  );
};
