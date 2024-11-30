import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navBarOpen, setnavBarOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectDimension = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectDimension);
    windowDimension.width > 800 && setnavBarOpen(false);
    return () => {
      window.removeEventListener("resize", detectDimension);
    };
  }, [windowDimension]);

  const links = [
    { id: 1, path: "/", label: "Inicio" },
    { id: 2, path: "/register", label: "Registro" },
    { id: 3, path: "/Contact", label: "Contacto" },
  ];

  return (
    <div className={navBarOpen ? styles.navOpen : styles.navBar}>
      {!navBarOpen && (
        <p className={styles.logo}>DISO | Digital Solutions</p>
      )}
      {!navBarOpen && windowDimension.width < 800 ? (
        <AiOutlineMenu
          color="#f1f1f1"
          onClick={() => setnavBarOpen(!navBarOpen)}
          size={25}
        />
      ) : (
        windowDimension.width < 800 && (
          <AiOutlineClose
            onClick={() => setnavBarOpen(!navBarOpen)}
            color="#f1f1f1"
            size={25}
          />
        )
      )}
      {navBarOpen && (
        <ul className={styles.linksContainer}>
          {links.map((link) => (
            <li key={link.id}>
              <Link
                to={link.path}
                onClick={() => setnavBarOpen(false)}
                className={styles.navLink}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {windowDimension.width > 800 && (
        <ul className={styles.linksContainer}>
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.path} className={styles.navLink}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;

