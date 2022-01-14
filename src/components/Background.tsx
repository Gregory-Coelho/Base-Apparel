import background from "../assets/bg-pattern-desktop.svg";
import styles from "../styles/Background.module.css";
import hero from "../assets/hero.jpg";

export function Background() {
  return (
    <div className={styles.cardBackground}>
      <div>
        <img src={background} className={styles.background} />
      </div>
      <div>
        <img src={hero} className={styles.hero} />
      </div>
    </div>
  );
}
