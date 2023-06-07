import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

import Item from "../Item/Item";

const ItemDetail = ({ Items }) => {
  const [tineCantidad, actualizarTieneCantidad] = useState(false);
  const { agregarAlCart } = useCartContext();

  const onAdd = (cantidad) => {
    agregarAlCart({ ...item, quantity: cantidad });
    actualizarTieneCantidad(true);
  };

  return (
    <div className="row">
      <div className="col-6">
        <h3>Nombre: {Items.name}</h3>
        <h4>Precio: {Items.price}</h4>
        <h4>Categoria: {Items.category}</h4>
      </div>
      <div className="col-6">
        {tineCantidad ? (
          <>
            <Link className="btn btn-success" to="/cart">
              Terminar Compra
            </Link>
            <Link className="btn btn-success" to="/">
              Seguir Comprando
            </Link>
          </>
        ) : (
          <ItemCount inital={1} stock={5} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
