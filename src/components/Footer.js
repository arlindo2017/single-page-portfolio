import React from "react";

const styles = {
  footerStyle: {
    height: "75px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  linkStyle: {
    margin: "0 10px",
    textDecoration: "none",
  },
};

function Footer() {
  return (
    <footer style={styles.footerStyle} className="footer container">
      <h6>
        <a
          className="link-secondary"
          style={styles.linkStyle}
          href="https://github.com"
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
          href="https://twitter.com"
        >
          Twitter
        </a>
      </h6>
    </footer>
  );
}

export default Footer;
