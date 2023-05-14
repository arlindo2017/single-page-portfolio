import React from "react";

const styles = {
  headerStyle: {
    color: "white",
    background: "#222831",
    opacity: "0.9",
    padding: "20px",
  },
  nameStyle: {
    margin: "0",
  },
};

function Header() {
  return (
    <header className=" container">
      <div style={styles.headerStyle}>
        <h1 style={styles.nameStyle}>Arlindo Pinto</h1>
      </div>
    </header>
  );
}

export default Header;
