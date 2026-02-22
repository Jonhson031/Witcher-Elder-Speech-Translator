import styles from "./RecentTranslations.module.css";
import clockIcon from "../../assets/clock-icon.svg";
import arrowIcon from "../../assets/arrow.svg";

export default function RecentTranslations() {
  return (
    <div className="recent-transactions__container">
      <div className={styles.header}>
        <h2>
          <img src={clockIcon} alt="Yellow Clock Icon" />
          Recent Translations
        </h2>
        <button className={styles.clearBtn}>Clear</button>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.wordFrom}>Gwynbleidd</span>
          <img
            src={arrowIcon}
            alt="Yellow arrow pointing from the entered word to the translated result"
          />
          <span className={styles.wordResult}>White Wolf</span>
        </li>
        <li className={styles.item}>
          <span className={styles.wordFrom}>Gwynbleidd</span>
          <img
            src={arrowIcon}
            alt="Yellow arrow pointing from the entered word to the translated result"
          />
          <span className={styles.wordResult}>White Wolf</span>
        </li>
        <li className={styles.item}>
          <span className={styles.wordFrom}>Gwynbleidd</span>
          <img
            src={arrowIcon}
            alt="Yellow arrow pointing from the entered word to the translated result"
          />
          <span className={styles.wordResult}>White Wolf</span>
        </li>
      </ul>
    </div>
  );
}
