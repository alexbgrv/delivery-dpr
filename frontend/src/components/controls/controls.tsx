
import "./style.css";
import React, {useContext} from 'react'

import wb from '../../img/wb.png'; 
import ali from '../../img/ali.png'; 
import ozon from '../../img/ozon.png'; 
import yandex from '../../img/yandex.png'; 
import { ModalContext } from "../../Context";

export const Controls = () => {
    const { openModal } = useContext(ModalContext);


    const handleClickWb = () =>{
        openModal({
            imgLogo:<img className="ImgLogo" src={wb} alt="image wb" />,
            content: <h2 className="ContentDiv">Вставьте ссылку на товар Wildberries</h2>
        })
    }
    const handleClickAli = () =>{
        openModal({
            imgLogo:<img className="ImgLogo" src={ali} alt="image ali"/>,
            content: <h2 className="ContentDiv">Вставьте ссылку на товар Aliexpress</h2>
        })
    }
    const handleClickOzon = () =>{
        openModal({
            imgLogo:<img className="ImgLogo" src={ozon} alt="image ozon" />,
            content: <h2 className="ContentDiv">Вставьте ссылку на товар Ozon</h2>
        })
    }
    const handleClickYandex = () =>{
        openModal({
            imgLogo:<img className="ImgLogo" src={yandex} alt="image yandex" />,
            content: <h2 className="ContentDiv">Вставьте ссылку на товар Яндекс Маркет</h2>
        })
    }

return (
    <div className="conteiner-Widget">
        <button onClick={handleClickWb}><img onClick={handleClickWb} src={wb} alt="image wb" /></button>
        <button onClick={handleClickAli}><img src={ali} alt="image ali" /></button>
        <button onClick={handleClickOzon}><img src={ozon} alt="image ozon" /></button>
        <button onClick={handleClickYandex}><img src={yandex} alt="image yandex" /></button>
      </div>
)
}