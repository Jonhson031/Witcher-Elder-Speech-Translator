export default function Textarea({textareaLabel, textareaPlaceholder, textareaID, value, onChange, readOnly}) {
  return (
    <div className='text-area__container'>
      <label htmlFor={textareaID}>{textareaLabel}</label>
      <textarea
        placeholder={textareaPlaceholder}
        name={textareaID}
        id={textareaID}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      ></textarea>
    </div>
  );
}
