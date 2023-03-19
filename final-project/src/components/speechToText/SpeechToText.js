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
      <div className="micBox">
        <p>Microphone: <span> {listening ? "on" : "off"} </span></p>
      </div>

      <button className="my-btn" onClick={SpeechRecognition.startListening}><i class="fa-sharp fa-solid fa-microphone"></i> Start</button>
      <button className="my-btn" onClick={stop}><i class="fa-sharp fa-solid fa-microphone-slash"></i> Stop</button>
      <button className="my-btn" onClick={resetTranscript}><i class="fa-solid fa-trash-can"></i> Reset</button>
      
      <div className="transcriptBox">
        <p className="textBox"> Text: {transcript}</p>
      </div>

      {/* < PromptFetcher transcript={transcript} /> */}
    </div>
  );
};
export default SpeechToText;
