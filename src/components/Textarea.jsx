export default function Textarea({textareaLabel, textareaPlaceholder, textareaID}) {
  return (
    <div className='text-area__container'>
      <label htmlFor={textareaID}>{textareaLabel}</label>
      <textarea
        placeholder={textareaPlaceholder}
        name={textareaID}
        id={textareaID}
      ></textarea>
    </div>
  );
}
