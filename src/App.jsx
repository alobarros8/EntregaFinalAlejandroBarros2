import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbarjs from "./Componentes/Navbar/Navbarjs";
import ItemlistContainer from "./Componentes/ItemListContainer/ItemListContainer";
import "./App.css";
import Footer from "./Componentes/Footer/Footer";
import { ItemsProvider } from "./Componentes/Context/ItemsContext.jsx";
import Title from "./Componentes/Title/Title";
function App() {
  return (
    <ItemsProvider>
      <BrowserRouter>
        <Navbarjs />
        <Title />
        <Routes>
          <Route exact path="/Pedidos" element={<ItemlistContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ItemsProvider>
  );
}

export default App;
