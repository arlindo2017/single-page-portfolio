import React from "react";

const styles = {
  headerStyle: {
    height: "200px",
  },
};

function Header() {
  return (
    <header style={styles.headerStyle} className="header container">
      <h1>Arlindo Pinto</h1>
    </header>
  );
}

export default Header;
