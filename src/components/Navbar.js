import React from "react";

const styles = {
  navbarStyle: {
    fontWeight: "bold",
    textDecoration: "none",
    marginBottom: "50px",
  },
  const styles = {
    linkStyle: {
      margin: "0 10px",
      textDecoration: "none",
      background: "white",
    },
    cardStyle: {
      backGroundColor: "white",
    },
  };
};

function Navbar({ currentPage, handlePageChange }) {
  return (
    <ul style={styles.navbarStyle} className="nav nav-tabs container">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
