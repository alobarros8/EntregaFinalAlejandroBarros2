import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function CartWidget() {
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
          <Modal.Title>Mi Carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <Link to={"/Pedidos"} className="nav-link">
              {" "}
              Seguir conmprando
            </Link>
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Finalizar Compra
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartWidget;
