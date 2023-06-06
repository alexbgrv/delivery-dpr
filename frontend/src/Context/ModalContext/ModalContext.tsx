import React, { createContext } from "react";

interface IModalContext {
  openModal: (modalConfig: { imgLogo: React.ReactNode; content: React.ReactNode }) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<IModalContext>({
  openModal: () => {},
  closeModal: () => {},
});