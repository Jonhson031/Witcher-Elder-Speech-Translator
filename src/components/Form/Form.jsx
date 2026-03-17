import styles from "./Form.module.css";
import messageIcon from "../../assets/message-icon.svg";
import telegramIcon from "../../assets/telegram-icon.svg";

export default function Form() {
  return (
    <section>
      <div className="form__container">
        <h2>
          <img src={messageIcon} alt="Yellow Message Icon" />
          Help Improve Translations
        </h2>
        <p className={styles.paragraph}>
          Know a word or phrase we're missing? Share your knowledge of Elder
          Speech!
        </p>
        <form action="post" className={styles.form}>
          <div>
              <label htmlFor="general-feedback">General Feedback</label>
              <textarea
                placeholder="Share your thoughts or suggestions..."
                name="general-feedback"
                id="general-feedback"
              ></textarea>
          </div>
          <div>
              <label htmlFor="newWord">New Word (Elder Speech)</label>
              <input
                id="newWord"
                name="newWord"
                placeholder="e.g., Va'esse"
                type="text"
                required
              />
          </div>
          <div>
              <label htmlFor="wordMeaning">Meaning (English)</label>
              <input
                id="wordMeaning"
                name="wordMeaning"
                placeholder="e.g., To be"
                type="text"
                required
              />
          </div>
          <div>
              <label htmlFor="wordSource">Source (Book / Game / Episode)</label>
              <input
                id="wordSource"
                name="wordSource"
                placeholder="e.g., The Witcher 3"
                type="text"
                required
              />
          </div>
          <div>
              <button>
                <img src={telegramIcon} alt="Telegram icon" />
                Send Request
              </button>
          </div>
        </form>
      </div>
    </section>
  );
}
