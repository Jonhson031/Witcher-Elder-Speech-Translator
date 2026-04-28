import { createPortal } from 'react-dom';
import { useContext, useEffect } from 'react';
import styles from './Alternatives.module.css';
import { TranslationContext } from '../../store/TranslationContext.jsx';

export default function Alternatives({ ...props }) {
  const { meanings, selectedIndex, handleSelectedIndex, replaceWord } =
    useContext(TranslationContext);

  useEffect(() => {
    function handleEsc(event) {
      if (event.key === 'Escape') {
        handleSelectedIndex(null);
      }
    }

    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [handleSelectedIndex]);

  return createPortal(
    <div className={styles.modalOverlay} onClick={() => handleSelectedIndex(null)}>
      <div className={styles.modalAlternatives} {...props}>
        <div className={styles.alternativesHeader}>
          <h2>Alternatives</h2>
          <button onClick={() => handleSelectedIndex(null)}></button>
        </div>
        <ul className={styles.alternativesList}>
          {meanings[selectedIndex].map((meaning, i) => (
            <li key={i}>
              <button onClick={() => replaceWord(meaning, i)}>{meaning}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>,
    document.getElementById('modal-alternatives'),
  );
}
