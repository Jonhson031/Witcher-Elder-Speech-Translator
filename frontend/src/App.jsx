import Header from './components/Header/Header.jsx';
import RecentTranslations from './components/RecentTranslations/RecentTranslations.jsx';
import Form from './components/Form/Form.jsx';
import Textareas from './components/Textareas.jsx';
import Alternatives from './components/Alternatives/Alternatives.jsx';
import { TranslationContextProvider } from './store/TranslationContext.jsx';

function App() {
  return (
    <>
      <Header></Header>
      <TranslationContextProvider>
        <main>
          <Textareas />
          <RecentTranslations />
          <Form />
        </main>
      </TranslationContextProvider>
    </>
  );
}

export default App;
