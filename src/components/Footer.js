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
    fontSize: "24px",
    color: "#222831",
  },
};

function Footer() {
  return (
    <footer style={styles.footerStyle} className="footer container">
      <a style={styles.linkStyle} href="https://github.com/ ">
        <i className="bi-github contact-me-icons"></i>
      </a>
      <a style={styles.linkStyle} href="https://linkedin.com">
        <i className="bi bi-linkedin"></i>
      </a>
      <a style={styles.linkStyle} href="https://twitter.com/Arlindo23636263">
        <i className="bi-twitter contact-me-icons"></i>
      </a>
      <a style={styles.linkStyle} href="mailto:perensen@gmail.com">
        <i className="bi-envelope-at contact-me-icons"></i>
      </a>
    </footer>
  );
}

export default Footer;
