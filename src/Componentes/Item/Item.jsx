import { memo } from "react";
import { Link } from "react-router-dom";

const Item = memo(({ item }) => {
  return (
    <div className="card w-25 m-5">
      <div className="card-body">
        <label>Nombre: {item.name}</label>
        <label>Precio: {item.price}</label>
        <label>Cateoria: {item.category}</label>
      </div>
      <div className="card-footer">
        <Link to={`/detail/${item.id}`}>
          <button className="btn btn-outline-dark">Detalle</button>
        </Link>
      </div>
    </div>
  );
});

export default Item;
