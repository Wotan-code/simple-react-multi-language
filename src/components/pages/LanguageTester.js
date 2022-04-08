//Project Components
import useGlobal from "../../components/context/useGlobal";

export default function LanguageTester() {
  const global = useGlobal(); //Global instance
  let content = require("../../languages/" + global.language + ".json"); //Content of the page depending on the language
  return (
    <div className="language-tester">
      <div className="language-tester-title">
        <h1>{content.title}</h1>
      </div>
      <div className="language-tester-content">
        <p>{content.line1}</p>
      </div>
      <div className="language-tester-selection">
        <p>{content.selectLanguage}</p>
      </div>
      <div className="language-tester-selection-flags">
        <div className="language-tester-selection-flag-button">
          <button className="es" onClick={() => global.changeLanguage("es")} />
          <p>{content.spanish}</p>
        </div>
        <div className="language-tester-selection-flag-button">
          <button className="en" onClick={() => global.changeLanguage("en")} />
          <p>{content.english}</p>
        </div>
        <div className="language-tester-selection-flag-button">
          <button className="it" onClick={() => global.changeLanguage("it")} />
          <p>{content.italian}</p>
        </div>
        <div className="language-tester-selection-flag-button">
          <button className="de" onClick={() => global.changeLanguage("de")} />
          <p>{content.german}</p>
        </div>
        <div className="language-tester-selection-flag-button">
          <button className="jp" onClick={() => global.changeLanguage("ja")} />
          <p>{content.japanese}</p>
        </div>
        
      </div>
      <div className="language-tester-footer">
        <p>{content.visit} <a href="https://samarozeballos.com/">https://samarozeballos.com/</a></p>
      </div>
    </div>
  );
}
