import styles from "../styles/Background.module.css";
import hero from "../assets/hero.jpg";
import { Card } from ".//Card";

export function Background() {
  return (
    <div>
      <div className={styles.cardBackground}>
        <Card />
      </div>

      <img src={hero} className={styles.hero} />
    </div>
  );
}
