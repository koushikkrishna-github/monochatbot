import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';

class SimpleForm extends Component {
  render() {
    return (
      <ChatBot 
       steps=
       
       {[
         {
          id:'intro', 
          message:'Do you agree to the Terms and Conditions?', 
          trigger:'intro-user',
         },
         {
          id:'intro-user', 
          options:[
            {value:'y', label:'Yes', trigger:'yes-response'},
            {value:'n', label:'No', trigger:'no-response'},
          ] 
         },
         {
          id:'yes-response', 
          message:'Great!', 
          end:true,
         },
         {
          id:'no-response', 
          message:'Sorry to hear that.', 
          end:true,
         },
        ]}
      />
    );
  }
       
}

export default SimpleForm;