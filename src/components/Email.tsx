import { useState } from "react";
import button from "../assets/icon-arrow.svg";
import styles from "../styles/Email.module.css";
import error from "../assets/icon-error.svg";
export function Email() {
  const [hasError, sethasError] = useState(Boolean);
  const logoError = <img src={error} className={styles.errorIcon} />;
  const paraError = (
    <p className={styles.messageError}> Please provide a valid email</p>
  );
  return (
    <div>
      <form className={styles.formEmail}>
        {hasError && logoError}
        <input
          className={`${hasError ? styles.inputEmailError : ""} ${
            styles.inputEmail
          }`}
          placeholder="Email Address"
          type="email"
          onChange={(e) => {
            const newValue = e.target.value;

            if (newValue.includes("@") || newValue === "") {
              sethasError(false);
            }
          }}
          onBlur={(e) => {
            const newValue = e.target.value;

            if (newValue && !newValue.includes("@")) {
              {
                sethasError(true);
              }
            }
          }}
        />
        <button type="submit" className={styles.buttonEmail}>
          <img src={button} />
        </button>
      </form>
      {hasError && paraError}
    </div>
  );
}
