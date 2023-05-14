import React from "react";

const styles = {
  footerStyle: {
    height: "75px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  linkStyle: {
    margin: "10px",
    padding: "10px",
    textDecoration: "none",
  },
};

function Footer() {
  return (
    <footer style={styles.footerStyle} className="footer container">
      <a
        className="link-secondary"
        style={styles.linkStyle}
        href="https://github.com/arlindo2017"
      >
        GitHub
      </a>
      <a
        className="link-secondary"
        style={styles.linkStyle}
        href="https://linkedin.com"
      >
        LinkedIn
      </a>
      <a
        className="link-secondary"
        style={styles.linkStyle}
        href="https://twitter.com/Arlindo23636263"
      >
        Twitter
      </a>
    </footer>
  );
}

export default Footer;
