import React from "react";

const styles = {
  headerStyle: {
    marginTop: "10px",
    borderRadius: "5px 5px 0 0 ",
    color: "white",
    background: "#222831",
    opacity: "0.9",
    padding: "10px 10px 0px 20px ",
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
