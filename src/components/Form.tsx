import styles from "../styles/Card.module.css";
import logo from "../assets/logo.svg";
import { Email } from "./Email";
import back from "../styles/Background.module.css";

export function Form() {
  return (
    <div className={back.cardBackground}>
      <div className={styles.entireCard}>
        <div>
          <img src={logo} />
        </div>
        <div className={styles.title}>
          <h2>W E ' R E</h2>
          <h1>
            C O M I N G
            <br />S O O N
          </h1>
        </div>
        <div>
          <p>
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
        </div>
        <div>
          <Email />
        </div>
      </div>
    </div>
  );
}
