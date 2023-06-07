import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  border-top">
      <div className="col-md-4 d-flex align-items-center">
        <a
          href="/"
          className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
        >
          <img
            className="logochamaco"
            src="../public/logochamaco.png"
            alt="logochamaco"
          />
        </a>
        <span className="mb-3 mb-md-0 text-muted">
          AyChamaco© 2022 Company, Inc
        </span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex p-2">
        <li className="ms-3 icono">
          <a
            className="text-muted"
            href="https://www.facebook.com/ay.chamaco"
            target="_blank"
          >
            <i className="bi bi-facebook" id="fb"></i>
          </a>
        </li>
        <li className="ms-3 icono">
          <a
            className="text-muted"
            target="_blank"
            href="https://www.instagram.com/ay.chamaco/"
          >
            <i className="bi bi-instagram" id="ig"></i>
          </a>
        </li>
        <li className="ms-3 icono">
          <a className="text-muted" href="#">
            <i className="bi bi-whatsapp" id="wp"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
