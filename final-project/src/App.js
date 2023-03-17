import "./App.css";
import Translate from "./components/google-translate/Translate";
import SpeechToText from "./components/speechToText/SpeechToText";
import SpeechToImage from "./components/SpeechToImage/SpeechToImage";

import { render } from "react-dom";
import { TranslatorProvider } from "react-translate";

function App() {
  return (
    <div>
      <Translate />
      <SpeechToText />
      {/* <SpeechToImage /> */}
    </div>
  );
}

export default App;
