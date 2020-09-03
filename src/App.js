import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <Container />
    
    
  );
}

function Container(){
  return (
    <div style={container}>
      <ProgressBar
        redbar={redbar}
        greenbar={greenbar}
        meter={meter}
        percentage="66%"
      />
    </div>
  )
}

class ProgressBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    var percentage = props.percentage;
    props.greenbar.width = percentage;
    var remaining = (1 - parseFloat(props.greenbar.width)/100).toLocaleString("en", {style: "percent"});
    props.redbar.width = remaining;
  }

  render(){
    return(
    <div style={this.props.meter}>
      <div style={this.props.greenbar}>
        Completion this.{this.props.greenbar.width}
      </div>
      <div style={this.props.redbar}>
        Remaining {this.remaining}
      </div>
    </div>
    );
  }
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
  width: ""
};

const meter = {
  "border-radius": "10px",
  border: "solid black 1px",
  margin: "5px",
};

const container = {
  border:"1px solid black",
  width: "80%",
  margin: "auto"
}

const loginpage = (
<div style={redbar}>
  <div style={greenbar}>
    Completion
  </div>
</div>
);

export default App;
