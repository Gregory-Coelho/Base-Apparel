import { useState } from "react";
import button from "../assets/icon-arrow.svg";
import styles from "../styles/Email.module.css";
export function Email() {
  const [inputValue, setInputValue] = useState("");

  function handleInput(e: any) {
    setInputValue(e.target.value);
  }

  function invalid() {
    if (!inputValue.includes("@")) {
      /*("Please profide a valid email");*/
    }
  }
  return (
    <div>
      <form className={styles.formEmail}>
        <input
          className={styles.inputEmail}
          placeholder="Email Address"
          value={inputValue}
          type="email"
          onChange={handleInput}
        />
        <button type="submit" className={styles.buttonEmail}>
          <img src={button} />
        </button>
      </form>
    </div>
  );
}
