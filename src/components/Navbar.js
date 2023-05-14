import React from "react";

const styles = {
  navbarStyle: {
    fontWeight: "bold",
    textDecoration: "none",
    marginBottom: "50px",
  },
  linkStyle: {
    margin: "0 10px",
    textDecoration: "none",
  },
  cardStyle: {
    backGroundColor: "white",
  },
};

function Navbar({ currentPage, handlePageChange }) {
  return (
    <ul style={styles.navbarStyle} className="nav nav-tabs container">
      <li className="nav-item">
        <a
          style={styles.linkStyle}
          href="#about"
          onClick={() => handlePageChange("About")}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "About"
              ? "nav-link active"
              : "nav-link link-secondary"
          }
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          style={styles.linkStyle}
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "Portfolio"
              ? "nav-link active"
              : "nav-link link-secondary"
          }
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          style={styles.linkStyle}
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "Contact"
              ? "nav-link active"
              : "nav-link link-secondary"
          }
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          style={styles.linkStyle}
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "Resume"
              ? "nav-link active"
              : "nav-link link-secondary"
          }
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
