import styles from './Buttons.module.css';
import switchBtnImg from '../../assets/switch-btn-icon.svg';
import translateBtnImg from '../../assets/translate-icon.svg';

export default function Buttons({onSwitchLanguage}) {
  return (
    <div className={styles.buttonsContainer}>
      <button onClick={onSwitchLanguage} className={styles.switchLanguagesBtn}>
        <img src={switchBtnImg} alt="Switch languages button" />
      </button>
      <button className={styles.translateBtn}>
        <img src={translateBtnImg} alt="Translate button" />
        <span>Translate</span>
      </button>
    </div>
  );
}
