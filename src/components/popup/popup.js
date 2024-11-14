import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Example({ title, category,date_added,hours_played,download,show, setShow }) {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title style={{color: 'red'}}> Informations </Modal.Title>
          
         

         
        </Modal.Header>
        <Modal.Body>
        <p>{title} : {category} </p>
          <p> Vitesse Max : {date_added}</p>
          <p> Préparteur : {hours_played}</p>
          <p> Nombre Cylindre : {download}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}
