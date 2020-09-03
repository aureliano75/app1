import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <ProgressBar
      redbar={redbar}
      greenbar={greenbar}
      meter={meter}
      percentage="66%"
    />
  );
}

function ProgressBar(props){
  var percentage = props.percentage;
  props.greenbar.width = percentage;
  var remaining = (1 - parseFloat(props.greenbar.width)/100).toLocaleString("en", {style: "percent"});
  props.redbar.width = remaining;
  return(
    <div style={props.meter}>
      <div style={props.greenbar}>
        Completion {props.greenbar.width}
      </div>
      <div style={props.redbar}>
        Remaining {remaining}
      </div>
    </div>
    
  );

}

const reactstart = (
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
);


const redbar =  {
  "border-radius": "0px 10px 10px 0px",
  display: "inline-block",
  backgroundColor: "#ff4a4a",
  width: ""
};

const greenbar = {
  "border-radius": "10px 0px 0px 10px",
  display: "inline-block",
  backgroundColor: "#42f578",
  width: "%"
};

const meter = {
  "border-radius": "10px",
  border: "solid black 1px",
  margin: "5px"
};

const loginpage = (
<div style={redbar}>
  <div style={greenbar}>
    Completion
  </div>
</div>
);

export default App;
