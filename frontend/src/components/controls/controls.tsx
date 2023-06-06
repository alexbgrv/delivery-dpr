import "./style.css";
import React, { useContext, useState } from "react";
import { useCustomState } from '../../UseCustomState';
import wb from "../../img/wb.png";
import ali from "../../img/ali.png";
import ozon from "../../img/ozon.png";
import yandex from "../../img/yandex.png";
import { ModalContext } from "../../Context";

export const Controls = () => {
  
  const { openModal } = useContext(ModalContext);

  const handleClickWb = () => {
    const widgetContainer = document.querySelector('.conteiner-Widget') as HTMLElement;
    
    widgetContainer.style.display = 'none';
    
    openModal({
      imgLogo: (
        <img className="ImgLogo" src={wb} alt="image wb" />
      ),
      content: (
        <h2 className="ContentDiv">
          Вставьте ссылку на товар Wildberries
        </h2>
      ),
    });
  };
  const handleClickAli = () => {
    const widgetContainer = document.querySelector('.conteiner-Widget') as HTMLElement;
    
    widgetContainer.style.display = 'none';
    openModal({
      imgLogo: (
        <img className="ImgLogo" src={ali} alt="image ali" />
      ),
      content: (
        <h2 className="ContentDiv">
          Вставьте ссылку на товар Aliexpress
        </h2>
      ),
    });
  };
  const handleClickOzon = () => {
    const widgetContainer = document.querySelector('.conteiner-Widget') as HTMLElement;
    
    widgetContainer.style.display = 'none';
    openModal({
      imgLogo: (
        <img className="ImgLogo" src={ozon} alt="image ozon" />
      ),
      content: (
        <h2 className="ContentDiv">
          Вставьте ссылку на товар Ozon
        </h2>
      ),
    });
  };
  const handleClickYandex = () => {
    const widgetContainer = document.querySelector('.conteiner-Widget') as HTMLElement;
    
    widgetContainer.style.display = 'none';
    openModal({
      imgLogo: (
        <img className="ImgLogo" src={yandex} alt="image yandex" />
      ),
      content: (
        <h2 className="ContentDiv">
          Вставьте ссылку на товар Яндекс Маркет
        </h2>
      ),
    });
  };

  return (
    <div className="conteiner-Widget">
      <button onClick={handleClickWb}>
        <img src={wb} alt="image wb" />
      </button>
      <button onClick={handleClickAli}>
        <img src={ali} alt="image ali" />
      </button>
      <button onClick={handleClickOzon}>
        <img src={ozon} alt="image ozon" />
      </button>
      <button onClick={handleClickYandex}>
        <img src={yandex} alt="image yandex" />
      </button>
    </div>
  );
};
