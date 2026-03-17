import Header from "./components/Header/Header.jsx";
import RecentTranslations from "./components/RecentTranslations/RecentTranslations.jsx";
import Form from "./components/Form/Form.jsx";
import Textareas from "./components/Textareas.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Textareas/>
          <RecentTranslations/>
          <Form/>
      </main>
    </>
  );
}

export default App;
