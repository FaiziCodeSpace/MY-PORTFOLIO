import styles from "./navPortion.module.css";
import { FiArrowUp } from "react-icons/fi";

export default function Navbar() {
  return (
    <>
      <section className={styles.container}>
        <nav className={styles.navbar}>
          <ul>
            <li><p>About</p> <FiArrowUp className={styles.icon}/></li>
            <li><p>Skills</p> <FiArrowUp className={styles.icon}/></li>
            <li><p>Services</p> <FiArrowUp className={styles.icon}/></li>
            <li><p>Contact</p> <FiArrowUp className={styles.icon}/></li>
          </ul>
        </nav>
        <h1><span>+</span> Portfolio <span>+</span></h1>
        <div className={styles.rightPortion}>
          <div className={styles.info}>
            <p>FAIZAN</p>
            <p>|SINCE 2025|</p>
          </div>
          <button>Let’s Talk</button>
        </div>
      </section>
    </>
  );
}
