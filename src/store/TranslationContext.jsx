import { createContext, useState, useEffect } from 'react';
import {
  useLocalStorageData,
  saveToLocalStorage,
  removeFromLocalStorage,
} from '../hooks/localStorage.jsx';

import searchWord from '../api/searchWord.js';

const capitalizeFirstLetter = (str) => {
  let capitalLetter = str[0].toUpperCase() + str.slice(1);
  return capitalLetter;
};

export const TranslationContext = createContext({
  language: {
    from: 'elderWord',
    to: 'englishMeaning',
  },
  inputText: '',
  handleSwitchLanguage: () => {},
  handleInputText: () => {},
  recentTranslations: [],
  handleRecentTranslations: () => {},
  clearRecentTranslations: () => {},
  isLoading: false,
  meanings: [],
  replaceWord: () => {},
  selectedIndex: null,
  handleSelectedIndex: () => {},
  handleTranslate: () => {},
});

export function TranslationContextProvider({ children }) {
  const [language, setLanguage] = useState({
    from: 'elderWord',
    to: 'englishMeaning',
  });
  const [inputText, setInputText] = useState('');
  const [meanings, setMeanings] = useState([]);
  const [recentTranslations, setRecentTranslations] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleInputText(text) {
    setInputText(text);
  }

  useLocalStorageData('recentTranslations', setRecentTranslations);

  useEffect(() => {
    if (!inputText.trim()) {
      setMeanings([]);
    }
  }, [inputText, setMeanings]);

  function handleSwitchLanguage(selectedIndex) {
    const outputText = meanings
      .map((wordMeanings, idx) => (idx === selectedIndex ? wordMeanings[0] : wordMeanings[0]))
      .join(' ');

    setLanguage((prev) => ({
      from: prev.to,
      to: prev.from,
    }));
    setInputText(outputText);
    setMeanings([...inputText.split(' ').map((word) => [word])]);
  }

  function handleRecentTranslations(from, to) {
    setRecentTranslations((prev) => {
      const next = [
        {
          id: crypto.randomUUID(),
          from,
          to,
        },
        ...prev,
      ];
      const sliced = next.slice(0, 10);
      saveToLocalStorage('recentTranslations', sliced);
      return sliced;
    });
  }

  function clearRecentTranslations() {
    setRecentTranslations([]);
    removeFromLocalStorage('recentTranslations');
  }

  function replaceWord(newWord) {
    if (newWord === meanings[selectedIndex][0]) {
      setSelectedIndex(null);
      return;
    }
    // Replace only the selected word's first meaning, keep others intact.
    setMeanings((prevMeanings) =>
      prevMeanings.map((wordMeanings, index) => {
        if (index !== selectedIndex) return wordMeanings;

        // Put picked alternative in front (for display as current output word)
        const nextMeanings = [newWord, ...wordMeanings.filter((w) => w !== newWord)];
        return nextMeanings;
      }),
    );

    // Optional: track a new recent translation from updated output
    const updatedOutput = meanings
      .map((wordMeanings, idx) => (idx === selectedIndex ? newWord : wordMeanings[0]))
      .join(' ');
    handleRecentTranslations(inputText, updatedOutput);

    setSelectedIndex(null);
  }

  function handleSelectedIndex(idx) {
    setSelectedIndex(idx);
  }

  async function handleTranslate() {
    const data = await searchWord(inputText, setIsLoading, language.from, language.to);
    if (!data) return;
    const fetchedMeanings = data?.data.map((word) => word.meanings);
    const output = fetchedMeanings.map((meaning) => meaning[0]).join(' ');
    fetchedMeanings[0] = [
      capitalizeFirstLetter(fetchedMeanings[0][0]),
      ...fetchedMeanings[0].slice(1),
    ];
    if (!output) return;
    handleRecentTranslations(inputText, output);
    setMeanings(fetchedMeanings);
  }

  const values = {
    language,
    inputText,
    handleSwitchLanguage,
    handleInputText,
    recentTranslations,
    handleRecentTranslations,
    clearRecentTranslations,
    isLoading,
    meanings,
    replaceWord,
    selectedIndex,
    handleSelectedIndex,
    handleTranslate,
  };

  return <TranslationContext.Provider value={values}>{children}</TranslationContext.Provider>;
}
