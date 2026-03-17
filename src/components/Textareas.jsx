import { useState } from 'react';
import Textarea from './Textarea.jsx';
import Buttons from './Buttons/Buttons.jsx';

export default function Textareas() {
  const [language, setLanguage] = useState({
    from: 'elder',
    to: 'english',
  });

  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  function handleSwitchLanguage() {
    setLanguage((prev) => ({
      from: prev.to,
      to: prev.from,
    }));

    setInputText(outputText);
    setOutputText(inputText);
  }

  return (
    <section>
      <Textarea
        textareaLabel={`Put text in ${language.from === 'elder' ? 'Elder Speech' : 'English'}`}
        textareaPlaceholder={`Type ${language.from === 'elder' ? 'Elder Speech' : 'English'} here...`}
        textareaID="input-text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <Buttons onSwitchLanguage={handleSwitchLanguage} />
      <Textarea
        textareaLabel={`${language.to === 'english' ? 'English' : 'Elder Speech'} Translation`}
        textareaPlaceholder="Translation will appear here..."
        textareaID="output-text"
        value={outputText}
        readOnly
      />
    </section>
  );
}
