import { useContext } from 'react';
import styles from './RecentTranslations.module.css';
import clockIcon from '../../assets/clock-icon.svg';
import arrowIcon from '../../assets/arrow.svg';
import { TranslationContext } from '../../store/TranslationContext';

export default function RecentTranslations() {
  const { recentTranslations, clearRecentTranslations } = useContext(TranslationContext);

  const sortedRecentTranslations = [...recentTranslations].sort((a, b) => b.id - a.id);
  if (sortedRecentTranslations.length > 0) {
    return (
      <section>
        <div className="recent-transactions__container">
          <div className={styles.header}>
            <h2>
              <img src={clockIcon} alt="Yellow Clock Icon" />
              Recent Translations
            </h2>
            <button onClick={clearRecentTranslations} className={styles.clearBtn}>
              Clear
            </button>
          </div>
          <ul className={styles.list}>
            {sortedRecentTranslations.map((recentTranslation) => (
              <li key={recentTranslation.id} className={styles.item}>
                <span className={styles.wordFrom}>{recentTranslation.from}</span>
                <img
                  src={arrowIcon}
                  alt="Yellow arrow pointing from the entered word to the translated result"
                />
                <span className={styles.wordResult}>{recentTranslation.to}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}
