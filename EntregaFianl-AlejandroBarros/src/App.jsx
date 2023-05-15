import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbarjs from "./Componentes/Navbar/Navbarjs";
import ItemlistContainer from "./Componentes/ItemListContainer/ItemListContainer";
import "./App.css";
import Footer from "./Componentes/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <Navbarjs />
      <Routes>
        <Route exact path="/Pedidos" element={<ItemlistContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
