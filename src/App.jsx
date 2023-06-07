import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartCountainer from "./components/CartContainer/CartCountainer";
import { FormContainer } from "./components/FormContainer/FormContainer";
import { CartContextProvider } from "./context/CartContext";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:cid" element={<ItemListContainer />} />

            <Route path="/detail/:pid" element={<ItemDetailContainer />} />
            <Route path="/contacto" element={<FormContainer />} />
            <Route path="/cart" element={<CartCountainer />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
