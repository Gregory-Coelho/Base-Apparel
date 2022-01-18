import React from "react";

import { Form } from "./components/Form";
import { Hero } from "./components/Hero";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div className={styles.background}>
      <Form />
      <Hero />
    </div>
  );
}

export default App;
