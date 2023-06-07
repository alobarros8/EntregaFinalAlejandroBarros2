import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";

const ItemDetailContainer = () => {
  const [Items, setItems] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { pid } = useParams();

  useEffect(() => {
    const dbFirestore = getFirestore();
    const queryDocument = doc(dbFirestore, "Burgers", pid);
    getDoc(queryDocument)
      .then((resp) => setItems({ id: Items.id, ...Items.data() }))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  return <>{isLoading ? <Loading /> : <ItemDetail Items={Items} />}</>;
};

export default ItemDetailContainer;
