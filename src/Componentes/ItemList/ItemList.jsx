import { memo } from "react";
import Item from "../Item/Item";

const ItemList = memo(({ items }) => {
  const objStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  };

  return (
    <div style={objStyle}>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
});

export default ItemList;
