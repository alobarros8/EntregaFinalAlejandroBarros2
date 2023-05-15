import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./ItemList.css";
import ItemCount from "../ItemCount/ItemCount";
import AddToCart from "../AddToCart/AddToCart";

function ItemList({ items }) {
  // Crear un objeto para agrupar los elementos por categoría
  const groupedItems = items.reduce((acc, item) => {
    //separar por categorias
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});
  return (
    <div className="container">
      {Object.entries(groupedItems).map(([category, categoryItems]) => (
        <div key={category}>
          <h2 className="m-3 c-title">{category}</h2>
          <div className="d-flex row align-items-center justify-content-center gap-2">
            {categoryItems.map((item) => (
              <Card key={item.id} className="card-item">
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>

                  <Card.Text>Precio: ${item.price}</Card.Text>
                  <ItemCount />
                </Card.Body>
                <AddToCart />
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
