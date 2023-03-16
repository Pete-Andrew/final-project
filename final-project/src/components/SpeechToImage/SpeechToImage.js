// import React from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SpeechToImage = () => {
  const { Configuration, OpenAIApi } = require("openai");

  const config = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(config);

  const prompt =
    "photorealistc oil painting of a cat drinking tequila next to a skull and bones in the style of the spanish artist velazquez and goya";
  const numberOfImages = 1;
  const imageSize = "1024x1024";

  openai
    .createImage({
      prompt: prompt,
      n: numberOfImages,
      size: imageSize,
    })
    .then((data) => {
      console.log(data.data.data);

      const DalleImage = data.data.data;

      // return (
      //   <div>
      //   <img src={DalleImage} alt="DalleImage"></img>
      //   </div>
      // )
    
    });
};

SpeechToImage();

//NOTES:
//in order to get this to run you need to be in the correct directory (final-project/final-project/src/components/SpeechToImage)
//then type in the terminal 'node speechToImage.js' this will then retun the URL in the terminal.
//This is currently a stand alone function.
//I've got no idea how many API calls I get with this key!!

// return (
//   <img src={DalleImage} alt="DalleImage"></img>

// )

// export default SpeechToImage;
