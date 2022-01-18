import { useState } from "react";
import button from "../assets/icon-arrow.svg";
import styles from "../styles/Email.module.css";
import error from "../assets/icon-error.svg";
export function Email() {
  const [inputValue, setInputValue] = useState("");

  function handleInput(e: any) {
    setInputValue(e.target.value);
  }
  const invalid = !inputValue.includes("@");

  return invalid ? (
    <div>
      <form className={styles.formEmail}>
        <img src={error} className={styles.errorIcon} />

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
      <p className={styles.messageError}> Please provide a valid email</p>
    </div>
  ) : (
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
  );
}
