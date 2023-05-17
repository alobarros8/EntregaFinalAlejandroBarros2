import React, { useContext } from "react";
import { ItemsContext } from "../Context/ItemsContext";

function AddToCart() {
  const { items, setItems } = useContext(ItemsContext);

  const addToCart = () => {
    const itemExists = items.some(
      (existingItem) => existingItem.id === item.id
    );

    if (itemExists) {
      // El elemento ya existe en el carrito
      console.log("El elemento ya está en el carrito");
    } else {
      // El elemento no existe en el carrito, agregarlo al contexto
      const updatedItems = [...items, item];
      setItems(updatedItems);
      console.log("Elemento agregado al carrito");
    }
  };

  return (
    <button className="btn btn-outline-success" onClick={addToCart}>
      Agregar al carrito
    </button>
  );
}

export default AddToCart;
