import { useState, useContext, useEffect } from 'react';
import Textarea from './Textarea.jsx';
import Buttons from './Buttons/Buttons.jsx';
import { TranslationContext } from '../store/TranslationContext.jsx';
import Alternatives from './Alternatives/Alternatives.jsx';

export default function Textareas() {
  const {
    language,
    inputText,
    handleInputText,
    meanings,
    selectedIndex,
    handleSelectedIndex,
    handleTranslate,
    isLoading,
  } = useContext(TranslationContext);

  const [popupPosition, setPopupPosition] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  function handleWordClick(e, index) {
    const rect = e.target.getBoundingClientRect();

    handleSelectedIndex(index);
    setAnchorEl(e.target);
    setPopupPosition({
      top: rect.bottom,
      left: rect.left,
    });
  }

  useEffect(() => {
    if (!anchorEl) return;

    const syncPopup = () => {
      const rect = anchorEl.getBoundingClientRect();
      setPopupPosition({ top: rect.bottom, left: rect.left });
    };

    window.addEventListener('scroll', syncPopup, true);
    window.addEventListener('resize', syncPopup);

    return () => {
      window.removeEventListener('scroll', syncPopup, true);
      window.removeEventListener('resize', syncPopup);
    };
  }, [anchorEl]);

  useEffect(() => {
    if (selectedIndex === null) {
      setAnchorEl(null);
      setPopupPosition(null);
    }
  }, [selectedIndex]);

  let textAreaChildren = 'Translation will appear here...';
  if (isLoading) {
    textAreaChildren = 'Translating...';
  } else if (meanings.length > 0) {
    textAreaChildren = meanings.map((meaning, index) => (
      <span
        key={index}
        onClick={(e) => handleWordClick(e, index)}
        onMouseEnter={(e) => (e.target.style.background = '#333')}
        onMouseLeave={(e) => (e.target.style.background = 'transparent')}
      >
        {meaning[0]}
      </span>
    ));
  } else {
    textAreaChildren = 'Translation will appear here...';
  }

  return (
    <section>
      <Textarea
        textareaLabel={`Put text in ${language.from === 'elderWord' ? 'Elder Speech' : 'English'}`}
        placeholder={`Type ${language.from === 'elderWord' ? 'Elder Speech' : 'English'} here...`}
        textareaID="input-text"
        value={inputText}
        onChange={(e) => handleInputText(e.target.value)}
      />
      <Buttons onTranslate={handleTranslate} />
      <Textarea
        textareaLabel={`${language.to === 'englishMeaning' ? 'English' : 'Elder Speech'} Translation`}
        textareaID="output-text"
        div={'div'}
        children={textAreaChildren}
      />
      {selectedIndex !== null && popupPosition && (
        <Alternatives
          style={{
            top: popupPosition.top,
            left: popupPosition.left,
          }}
        />
      )}
    </section>
  );
}
