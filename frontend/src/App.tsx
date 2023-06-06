import React from "react";
import { Controls, Modal } from "./components"
import {ModalProvider} from "./Context"

function App() {
  return (
    <ModalProvider>
      <div className="wrapper-conteiner">
        <h1>Выберите маркетплейс</h1>
        <Controls />
       
        <div className="bg"></div>
      </div>
    </ModalProvider>
  );
}

export default App;



