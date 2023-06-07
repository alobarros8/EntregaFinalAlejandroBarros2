import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
  writeBatch,
} from "firebase/firestore";
const CartList = () => {
  const [id, setId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const { cartList, vaciarCarrito, precioTotal, eliminarProducto } =
    useCartContext();
  const handleSubmit = (event) => {
    event.preventDefault();

    const order = {
      buyer: formData,
      items: cartList.map(({ id, name, price }) => ({ id, name, price })),
      total: precioTotal(),
    };

    const db = getFirestore();

    const queryCollection = collection(db, "orders");

    addDoc(queryCollection, order)
      .then((resp) => setId(resp.id))
      .catch((err) => console.log(err))
      .finally(() => {
        console.log("termino la promesa");

        vaciarCarrito();
      });
  };
  const handleOnChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Modal.Body>
      {id && <h2>El id de la orden de la compra es: {id}</h2>}
      {cartList.length === 0 ? (
        <center>
          <h2>No hay productos</h2>
          <Link to="/"> ⬅ Ir a ver productos</Link>
        </center>
      ) : (
        <div>
          {cartList.map((product) => (
            <li key={product.id}>
              Nombre: {product.name} - Cantidad: {product.quantity}
              <button
                className="btn btn-danger"
                onClick={() => eliminarProducto(product.id)}
              >
                {" "}
                X{" "}
              </button>
            </li>
          ))}
          <h3>Precio Total: {parseInt(precioTotal())}</h3>
          <button onClick={vaciarCarrito}>Vaciar CArrito</button>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="ingrese el nomber"
              onChange={handleOnChange}
              value={formData.name}
            />
            <input
              type="text"
              name="phone"
              placeholder="ingrese el teléfono"
              onChange={handleOnChange}
              value={formData.phone}
            />
            <input
              type="text"
              name="email"
              placeholder="ingrese el mail"
              onChange={handleOnChange}
              value={formData.email}
            />
            <input
              type="text"
              name="repetirMail"
              placeholder="repetir el mail "
              onChange={() => {}}
            />
            <button>Generar Orden</button>
          </form>
        </div>
      )}
    </Modal.Body>
  );
};

export default CartList;
