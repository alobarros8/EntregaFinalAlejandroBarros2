import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { Spinner } from "react-bootstrap";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/db.jsx";

function ItemlistContainer() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const itemsCollection = collection(db, "Burgers");
      const itemsSnapshot = await getDocs(itemsCollection);
      const itemsData = itemsSnapshot.docs.map((doc) => doc.data());
      setItems(itemsData);
      setIsLoading(false);
    };

    fetchItems();
  }, []);

  return (
    <div className="d-flex ">
      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
}
export default ItemlistContainer;
