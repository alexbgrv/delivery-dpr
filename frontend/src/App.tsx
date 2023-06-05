import React from "react";
import wb from './img/wb.png'; 
import ali from './img/ali.png'; 
import ozon from './img/ozon.png'; 
import yandex from './img/yandex.png'; 

function App() {
  return (
    <div className="wrapper-conteiner">
      <h1>Выберите маркетплейс</h1>
      <div className="conteiner-Widget">
        <button><img src={wb} alt="image wb" /></button>
        <button><img src={ali} alt="image ali" /></button>
        <button><img src={ozon} alt="image ozon" /></button>
        <button><img src={yandex} alt="image yandex" /></button>
      </div>
    </div>
  );
}

export default App;
