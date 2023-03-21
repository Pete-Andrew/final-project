import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import SpeechToText from "../speechToText/SpeechToText.js";
import "./speechToImage.css"; 
 

//src folder needs to contain a .env file containing your open ai API key, use the following format in the .env file: REACT_APP_API_KEY="yourAPIkeyHere"
// https://platform.openai.com/account/api-keys
//Configuration is a constructor that is passed the values of the API key. - CHECK THIS
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});
const openai = new OpenAIApi(configuration);

function SpeechToImage() {
  //useState is a react hook that declares a “state variable” and allows us to track state in a function component, the values in () are entered as default values.
  // useState returns a pair of values: the current state and a function that updates it. see: https://legacy.reactjs.org/docs/hooks-state.html
  const [userPrompt, setUserPrompt] = useState("");
  const [number, setNumber] = useState(1);
  const [size, setSize] = useState("256x256");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(openai);
  //the async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
  //the generate image function creates a const 'image parameters' contaning an object with the neccessary variables for image creation.
  const generateImage = async () => {
    setLoading(true);
    const imageParameters = {
      prompt: userPrompt,
      n: parseInt(number),
      size: size,
    };

    // 'awaits' for the response of the call to openAI and creates the const 'urlData' from the API response returned (in this case targets the Url of the generated image)
    //'createImage' function creates a new p5.Image (the datatype for storing images)
    const response = await openai.createImage(imageParameters);
    const urlData = response.data.data[0].url;
    // 'setImageUrl' Sets the URL for the specified image element id. In this case the response from opeanAI (urlData)
    setImageUrl(urlData);
    setLoading(false);
  };

  const SetAttributeForUser = (e) => {
    setUserPrompt(e);
  };

  return (
    <main className="App">
      {loading ? (
        <h1 id="loading" class="glow">Loading...</h1>
      ) : (
        <>
          {imageUrl && <img src={imageUrl} className="image" alt="ai thing" />}

          <SpeechToText
            label={"Description"}
            setAttribute={SetAttributeForUser}
            userPrompt={userPrompt}
          />
          <button className="main-button" onClick={() => generateImage()}>
            Create the Magic! <i class="fa-sharp fa-solid fa-wand-sparkles"></i>
          </button>
        </>
      )}

    </main>
  );
}

export default SpeechToImage;
