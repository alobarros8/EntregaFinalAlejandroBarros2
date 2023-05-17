import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import { ItemsContext } from "../Context/ItemsContext";

function CartList() {
  const { items: itemsCart } = useContext(ItemsContext);

  return (
    <Modal.Body>
      {itemsCart.map((item) => (
        <div key={item.id}>
          <h4 className="fs-6">{item.name}</h4>
          <p>Precio: ${item.price}</p>
          <p>Cantidad: {item.quantity}</p>
        </div>
      ))}
    </Modal.Body>
  );
}

export default CartList;
