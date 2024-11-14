import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import {FcNext} from 'react-icons/fc'
import {VscDebugBreakpointLog} from 'react-icons/vsc'

export default function Example({ title, parg,text,text1,text2,parg1,text3,text4,show, setShow }) {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title style={{color: 'red'}}> Informations </Modal.Title>
          
         

         
        </Modal.Header>
        <Modal.Body>
        <h1>{title} </h1>
        <h3><FcNext/>{parg}</h3>
        <p><VscDebugBreakpointLog/> {text}</p>
        <p><VscDebugBreakpointLog/> {text1}</p>
        <p><VscDebugBreakpointLog/> {text2}</p>
        <h3><FcNext/> {parg1}</h3>
        <p><VscDebugBreakpointLog/> {text3}</p>
        <p><VscDebugBreakpointLog/> {text4}</p>
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
