import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import CartList from "../CartList/CartList";
const CartWidget = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        <i class="bi bi-bag"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mi Pedido</Modal.Title>
        </Modal.Header>
        <CartList />
      </Modal>
    </>
  );
};

export default CartWidget;
