import React, { Component } from 'react';
import SimpleForm from './components/chatbot/SimpleForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <h1>Welcome to Monobot</h1>
        <SimpleForm />
      </div>
      
    );
  }
       
}
export default App;