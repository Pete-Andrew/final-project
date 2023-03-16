import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./translate.css"; 
import 'semantic-ui-css/semantic.min.css';
import "./translate.css";
import {
  Form,
  TextArea,
  Button,
  Icon
} from 'semantic-ui-react';


export default function Translate() {
    return (
        <div>
            <div className="app-header">
                <h2 className="header">Talk Trekker</h2>
            </div>

            <div className='app-body'>
                <div>
                    <Form>
                        <Form.Field
                            control={TextArea}
                            placeholder='Type Text to Translate..'
                        />

                        <select className="language-select">
                            <option>Please Select Language..</option>
                        </select>

                        <Form.Field
                            control={TextArea}
                            placeholder='Your Result Translation..'
                        />

                        <Button
                            color="orange"
                            size="large"
                        >
                            <Icon name='translate' />
                            Translate</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}


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
