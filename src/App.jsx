import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Textarea from "./components/Textarea.jsx";
import Buttons from "./components/Buttons/Buttons.jsx";
import RecentTranslations from "./components/RecentTranslations/RecentTranslations.jsx";
import Form from "./components/Form/Form.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <section>
          <Textarea
            textareaLabel="Put text in Elder Speech"
            textareaPlaceholder="Type Elder Speech here..."
            textareaID="elder-speech-area"
          ></Textarea>
          <Buttons></Buttons>
          <Textarea
            textareaLabel="English Translation"
            textareaPlaceholder="Translation will appear here..."
            textareaID="engih-translation-area"
          ></Textarea>
        </section>
        <section>
          <RecentTranslations></RecentTranslations>
        </section>
        <section>
          <Form></Form>
        </section>
      </main>
    </>
  );
}

export default App;
