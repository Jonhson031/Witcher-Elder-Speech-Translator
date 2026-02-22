import starDecoration from "../../assets/star-icon.svg";
import diamondDecoration from "../../assets/diamond-icon.svg";
import styles from './Header.module.css';


export default function Header() {
  return (
    <header>
      <h1>
        <span>
          <img src={starDecoration} alt="" />
        </span>
        Witcher Elder Speech Translator
        <span>
          <img src={starDecoration} alt="" />
        </span>
      </h1>
      <p>Translate the language of elves into the Common Tongue</p>
      <div className={styles.divider}>
        <span></span>
        <img src={diamondDecoration} alt=""/>
        <span></span>
      </div>
    </header>
  );
}
