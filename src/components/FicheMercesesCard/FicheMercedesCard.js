import React from "react";
import "./FicheMercedesCard.css";

import { SecondaryButton } from "../../components/index";
import ModalPopup from "../popup/popup";

const FicheMercedesCard = (props) => {
  const [show, setShow] = React.useState(false);

  const showPopup = (event) => {
    setShow(true);
  };

  return (
    <>
      {show && (
        <ModalPopup title={props.title} category={props.category}  date_added={props.date_added} hours_played={props.hours_played} 
        download={props.download}  show={show} setShow={setShow}></ModalPopup>
        
      )}
      
      <div className="gaming-card ">
        <ul>
          <li>
            <img src={props.image} alt="" />
          </li>
          <li>
            <h4>{props.title}</h4>
            <span>{props.category}</span>
          </li>
          <li>
            <h4>Vitesse Max</h4>
            <span>{props.date_added}</span>
          </li>
          <li>
            <h4>Preparateur</h4>
            <span>{props.hours_played}</span>
          </li>
          <li>
            <h4>Nombre Cylindre</h4>
            <span>{props.download}</span>
          </li>
          <div onClick={showPopup}>
            <SecondaryButton>Fiche Technique</SecondaryButton>
          </div>
        </ul>
      </div>
    </>
  );
};

export default FicheMercedesCard;
