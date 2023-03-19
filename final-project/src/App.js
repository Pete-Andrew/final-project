import "./App.css";

// import SpeechToText from "./components/speechToText/SpeechToText";
// import SpeechToImage from "./components/SpeechToImage/SpeechToImage";
// import { render } from "react-dom";
// import { useState } from "react";

import React from "react";

import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { InputBox } from "./InputBox";
import SpeechToText from "./components/speechToText/SpeechToText";

const configuration = new Configuration({
  //src folder needs to contain a .env file containing your open ai API key, use the following format in the .env file: REACT_APP_API_KEY="yourAPIkeyHere"
  // https://platform.openai.com/account/api-keys
  apiKey: process.env.REACT_APP_API_KEY,
});
const openai = new OpenAIApi(configuration);

function App() {
  const [userPrompt, setUserPrompt] = useState("test");
  const [number, setNumber] = useState(1);
  const [size, setSize] = useState("256x256");
  const [imageUrl, setImageUrl] = useState("");

  const generateImage = async () => {
    const imageParameters = {
      prompt: userPrompt,
      n: parseInt(number),
      size: size,
    };
    const response = await openai.createImage(imageParameters);
    const urlData = response.data.data[0].url;
    setImageUrl(urlData);
  };

  const SetAttributeForUser = (e) => {
    setUserPrompt(e);
  };

  return (
    <main className="App">
      {imageUrl && <img src={imageUrl} className="image" alt="ai thing" />}

      <SpeechToText label={"Description"} setAttribute={SetAttributeForUser} />

      {/* <InputBox label={"Description"} userPrompt = {userPrompt} setAttribute={SetAttributeForUser} /> */}
      {/* <InputBox label={"Amount"} setAttribute={setNumber} /> */}
      {/* <InputBox label={"Size"} setAttribute={setSize} /> */}
      <button className="main-button" onClick={() => generateImage()}>
        Generate
      </button>
    </main>
  );
}

export default App;
