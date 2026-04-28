export default function Textarea({ textareaLabel, textareaID, onChange, div, children, ...props }) {
  return (
    <div className="text-area__container">
      <label htmlFor={textareaID}>{textareaLabel}</label>
      {!div && (
        <textarea
          name={textareaID}
          id={textareaID}
          onChange={onChange}
          {...props}
          maxLength={1000}
        />
      )}
      {div && <div className="textarea-div">{children}</div>}
    </div>
  );
}
