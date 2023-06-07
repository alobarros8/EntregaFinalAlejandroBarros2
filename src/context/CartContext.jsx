import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const agregarAlCart = (newProduct) => {
    const indexProduct = cartList.findIndex(
      (product) => product.id === newProduct.id
    );

    if (indexProduct === -1) {
      setCartList([...cartList, newProduct]);
    } else {
      cartList[indexProduct].quantity += newProduct.quantity;
      setCartList([...cartList]);
    }
  };

  const cantidadTotal = () =>
    cartList.reduce(
      (cantidadTotal, objProducto, index) =>
        (cantidadTotal += objProducto.quantity),
      0
    );
  function precioTotal() {
    return cartList.reduce(
      (totalPrice, objProducto) =>
        (totalPrice += objProducto.price * objProducto.quantity),
      0
    );
  }

  const eliminarProducto = (pid) => {
    const indexProduct = cartList.findIndex((product) => product.id === pid);

    if (cartList[indexProduct].quantity > 1) {
      cartList[indexProduct].quantity = cartList[indexProduct].quantity - 1;
      setCartList([...cartList]);
    } else {
      setCartList(cartList.filter((product) => product.id !== pid));
    }
  };

  const vaciarCarrito = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        agregarAlCart,
        vaciarCarrito,
        precioTotal,
        cantidadTotal,
        eliminarProducto,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
