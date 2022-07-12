

import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

export const LearnMoreModal = ({ modal }) => {
  const [show, setShow] = useState(modal);
  console.log("modal: ", modal);
  
  const handleClose = () => setShow(false);
  // useEffect(() => {
  //   setShow(modal)
  // },[modal])
  // const handleShow = () => setShow(true);
  
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
