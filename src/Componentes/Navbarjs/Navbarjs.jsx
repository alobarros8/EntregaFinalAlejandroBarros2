import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import { useCartContext } from "../../context/CartContext";
import { categorias } from "../../utils/categorias";

const NavBar = () => {
  const { cantidadTotal } = useCartContext();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink
          className={({ isActive }) =>
            isActive ? "btn btn-primary" : "btn btn-outline-primary"
          }
          to="/"
        >
          AyChamaco
        </NavLink>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {categorias.map((item) => (
              <Link key={item.id} to={`/categoria/${item.categoria}`}>
                {item.name}
              </Link>
            ))}
          </Nav>
          <Nav>
            <Link to="/cart">
              {cantidadTotal() > 0 && cantidadTotal()}
              <CartWidget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
