import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./translate.css"; 
import reportWebVitals from './reportWebVitals';
import { setConfig } from 'react-google-translate';

setConfig({
  clientEmail: process.env.REACT_APP_GCP_CLIENT_EMAIL ?? '',
  privateKey: process.env.REACT_APP_GCP_PRIVATE_KEY ?? '',
  projectId: process.env.REACT_APP_GCP_PROJECT_ID ?? ''
})

const Example = () => {

  const [text] = useState('test');
  const [language] = useState('zh-CN');

  const [translate, { data, loading }] = useLazyTranslate({
    language
  })

  useEffect(() => {
    if (text) {
      translate(text, language);
    }
  }, [translate, text]);

  render(); {
    return (
      <div>{loading ? 'Loading...' : data}</div>
    )
  }
}

Example(); 

// translate ();

// function Translate() {
//     return (
  
               
  
//       <div id="about" className="container-fluid flex justify-content-center">
//        <h1>Here's the translation</h1>
          
//           <p>This part is inside a .container class.</p> 
//           <p>The .container class provides a responsive fixed width container.</p>
//           <p>Resize the browser window to see that its width (max-width) will change at different breakpoints.</p>
//         </div>
  
        
  
     
//     );
//   }
  
//   export default Translate;
