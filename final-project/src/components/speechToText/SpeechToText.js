import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

// import PromptFetcher from "./PromptFetcher";

//from documentation on https://www.npmjs.com/package/react-speech-recognition#basic-example
const SpeechToText = ({label, setAttribute}) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

 
  // useEffect(() => {
  //   if(!listening){
  //     setAttribute(transcript)
  //   }
  // }, [listening]); // Only run the effect if listening changes
  

  const stop = () => {
    SpeechRecognition.stopListening();
    setAttribute(transcript)
  }

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p >Text: {transcript}</p>

      {/* < PromptFetcher transcript={transcript} /> */}
    </div>
  );
};
export default SpeechToText;
