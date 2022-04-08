//Simple css for the app
import "./assets/styles/simpleTemplate.css";
//Component for testing the language
import GlobalProvider from "./components/context/GlobalProvider";
import LanguageTester from "./components/pages/LanguageTester";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <LanguageTester />
      </GlobalProvider>
    </div>
  );
}

export default App;
