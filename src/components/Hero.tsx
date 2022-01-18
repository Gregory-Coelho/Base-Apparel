import styles from "../styles/Hero.module.css";
import hero from "../assets/hero.jpg";

export function Hero() {
  return (
    <div className={styles.hero}>
      <img src={hero} className={styles.imageHero} />
    </div>
  );
}
