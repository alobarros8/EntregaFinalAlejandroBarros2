import React, { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";

function CartWidget({ cartItems }) {
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  ); // Suma las cantidades de todos los objetos de burger en cartItems
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  ); // Calcula el precio total sumando las propiedades de precio y cantidad de cada objeto de bulet
  let [showCart, setShowCart] = useState(false);
  let [quantity, setQuantity] = useState(1);
  let [itemPrice, setItemPrice] = useState(totalPrice);

  const handleClose = () => setShowCart(false);

  let handleIncrement = (itemId) => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });
    setCartItems(updatedCartItems);
    setItemPrice(
      updatedCartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      )
    );
  };

  let handleDecrement = (itemId) => {
    const currentItem = cartItems.find((item) => item.id === itemId);
    if (currentItem.quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        } else {
          return item;
        }
      });
      setCartItems(updatedCartItems);
      setItemPrice(
        updatedCartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        )
      );
    }
  };

  return (
    <>
      <Button variant="dark" onClick={() => setShowCart(true)}>
        <i className="bi bi-cart-fill"></i>
        <span className="badge bg-danger">{totalQuantity}</span>
      </Button>

      <Modal show={showCart} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Burger</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => handleDecrement(item.id)}
                    >
                      -
                    </Button>{" "}
                    {item.quantity}{" "}
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => handleIncrement(item.id)}
                    >
                      +
                    </Button>
                  </td>
                  <td>{item.price} </td>
                  <td>{item.price * item.quantity} $</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <p>
            Total: <strong>{itemPrice} $</strong>
          </p>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartWidget;
