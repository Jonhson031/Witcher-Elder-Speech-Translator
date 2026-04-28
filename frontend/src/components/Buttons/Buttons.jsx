import { useContext } from 'react';
import styles from './Buttons.module.css';
import switchBtnImg from '../../assets/switch-btn-icon.svg';
import translateBtnImg from '../../assets/translate-icon.svg';
import { TranslationContext } from '../../store/TranslationContext.jsx';

export default function Buttons({ onTranslate }) {
  const { handleSwitchLanguage } = useContext(TranslationContext);

  return (
    <div className={styles.buttonsContainer}>
      <button onClick={handleSwitchLanguage} className={styles.switchLanguagesBtn}>
        <img src={switchBtnImg} alt="Switch languages button" />
      </button>
      <button onClick={onTranslate} className={styles.translateBtn}>
        <img src={translateBtnImg} alt="Translate button" />
        <span>Translate</span>
      </button>
    </div>
  );
}
