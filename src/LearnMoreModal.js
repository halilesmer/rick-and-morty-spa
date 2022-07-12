

import React, {useEffect,  useState } from "react";
import Modal from "react-bootstrap/Modal";

export const LearnMoreModal = ({ modal }) => {
  // if I use directly in show state the props 'modal' it doesn't work. Why?
  const [show, setShow] = useState(false);
  
  // const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  useEffect(() => { 
    setShow(modal)
  },[modal])
  
  console.log("modal: ", modal);
  console.log("show: ", show);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
     
    </Modal>
  );
};
