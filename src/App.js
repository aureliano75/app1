import React, {useState} from 'react';
import './App.css';


function App() {
  return (
    <div>

    <Container />
    </div>

  );
}

function H1(props){
  return(
  <h1>{props.text}</h1>
  );
}

function Container(){
  return (
    <div style={container}>
      <H1 
        text={"Hello World"}  
      />
      <ul>
        {list}
      </ul>
      <ProgressBar
        bar1={greenbar}
        bar2={redbar}
        meter={meter}
        todate="10"
        total="300"
      />
      <ProgressBar
        bar1={purplebar}
        bar2={yellowbar}
        meter={meter}
        todate="11"
        total="300"
      />
      <ProgressBarV2 
        bar2={bluebar}
        bar1={orangebar}
        meter={meter}
        todate={11}
        total="300"
      />

      

    </div>
  )
}

const listelements = ["Dashboard","Other"];

const list = listelements.map((listelement)=>
<li>{listelement}</li>
);

class ProgressBarV2 extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      todate: props.todate,
      total : props.total,
      bar1:props.bar1,
      bar2:props.bar2,
      meter:props.meter

    };
    
  }

  tick() {
    this.setState(prevState => ({
      todate: prevState.todate + 1,
      bar1:{ ...this.state.bar1, width:(prevState.todate/prevState.total).toLocaleString("en", {style: "percent"})},
      bar2:{ ...this.state.bar2, width:((prevState.total-prevState.todate)/prevState.total).toLocaleString("en", {style: "percent"}).toLocaleString("en", {style: "percent"})}
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
      <div style={this.state.meter}>
      <div style={this.state.bar1}>
        {this.state.bar1.width}
      </div>
      <div style={this.state.bar2}>
        {this.state.bar2.width}
      </div>
      
      
        
      </div>
      <button onClick={()=>this.componentDidMount()}>Start</button>
      <button onClick={()=>this.componentWillUnmount()}>Stop</button>
      </div>
    );
  }
}





class ProgressBar extends React.Component{
  constructor(props){
    super(props);
    var percentage = (this.props.todate/this.props.total).toLocaleString("en", {style: "percent"});
    this.props.bar1.width = percentage;
    var remaining = (1 - parseFloat(this.props.bar1.width)/100).toLocaleString("en", {style: "percent"});
    this.props.bar2.width = remaining;
  }

  render(){
    return(
    <div style={this.props.meter}>
      <div style={this.props.bar1}>
        {this.props.bar1.width}
      </div>
      <div style={this.props.bar2}>
        {this.props.bar2.width}
      </div>
    </div>
    );
  }
}



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
const yellowbar =  {
  "border-radius": "0px 10px 10px 0px",
  display: "inline-block",
  backgroundColor: "#fcf262",
  width: ""
};

const purplebar = {
  "border-radius": "10px 0px 0px 10px",
  display: "inline-block",
  backgroundColor: "#e562fc",
  width: ""
};

var bluebar =  {
  "border-radius": "0px 10px 10px 0px",
  display: "inline-block",
  backgroundColor: "#66ffed",
};
var orangebar = {
  "border-radius": "10px 0px 0px 10px",
  display: "inline-block",
  backgroundColor: "#ffab66",
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
