import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImgUpload from "./components/Imgupload"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ImgUpload />
      </div>
    );
  }
  
}

export default App;
