

// import React, {useEffect,  useState } from "react";
import { Modal, } from "react-bootstrap";
import './LearnMoreModal.css'
export const LearnMoreModal = ({ modal, handleClose, item }) => {


 
  return (
    <Modal className="learnMoreModalCon"
      show={modal}
      onHide={(e) => handleClose(e)}
      centered
      onEscapeKeyDown={(e) => handleClose(e)}

    >
      <Modal.Header closeButton>
        <Modal.Title>{item.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={item.image} alt={item.title} />
      </Modal.Body>
      <p>Species: {item.species}</p>
      <p>Status: {item.status}</p>

    </Modal>
  );
};
