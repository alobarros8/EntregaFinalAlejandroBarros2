import { memo } from "react";
import Item from "../Item/Item";

const ItemList = memo(({ productos }) => {
  const objStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  };

  console.log("ItemList");
  return (
    <div style={objStyle}>
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
});

export default ItemList;
