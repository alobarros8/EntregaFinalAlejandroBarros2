import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../../../../../Proyecto final otro/clases/proyecto/src/components/Loading/Loading";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { pid } = useParams();

  useEffect(() => {
    const dbFirestore = getFirestore();
    const queryDocument = doc(dbFirestore, "productos", pid);
    getDoc(queryDocument)
      .then((resp) => setProduct({ id: resp.id, ...resp.data() }))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  return <>{isLoading ? <Loading /> : <ItemDetail product={product} />}</>;
};

export default ItemDetailContainer;
