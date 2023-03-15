import logo from './logo.svg';
import './App.css';
import Translate from './components/google-translate/Translate';
import SpeechToText from './components/speechToText/SpeechToText';

function App() {
  return (
    <div>
    <Translate />
    <SpeechToText />
    </div>
  );
}

export default App;
