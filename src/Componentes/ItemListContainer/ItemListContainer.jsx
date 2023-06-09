import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { Spinner } from "react-bootstrap";

import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

import "./ItemListContainer.css";
function ItemlistContainer() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { cid } = useParams();
  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "Burgers");
    const queryFilter = cid
      ? query(queryCollection, where("category", "==", cid))
      : queryCollection;

    getDocs(queryFilter)
      .then((resp) =>
        setItems(resp.docs.map((item) => ({ id: item.id, ...item.data() })))
      )
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [cid]);

  return (
    <div className="d-flex bg-img ">
      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
}
export default ItemlistContainer;
