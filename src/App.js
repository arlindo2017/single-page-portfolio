import React from "react";
import Section from "./components/Section";
import Header from "./components/Header";
import Footer from "./components/Footer";

const styles = {
  backgroundStyle: {},
};

function App() {
  return (
    <div style={styles.backgroundStyle}>
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
