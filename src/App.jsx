import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Title from "./Componentes/Title/Title";
import NavBar from "./Componentes/Navbarjs/Navbarjs";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import CartList from "./Componentes/CartList/CartList";
import { FormContainer } from "./Componentes/FormContainer/FormContainer";
import { CartContextProvider } from "./context/CartContext";
import Footer from "./Componentes/Footer/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Title />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:cid" element={<ItemListContainer />} />

            <Route path="/detail/:pid" element={<ItemDetailContainer />} />
            <Route path="/contacto" element={<FormContainer />} />
            <Route path="/cart" element={<CartList />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
