import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import "bootstrap/dist/css/bootstrap.min.css";
import "./speechToText.css"; 

//from https://www.npmjs.com/package/react-speech-recognition#basic-example 
const SpeechToText = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};
export default SpeechToText;