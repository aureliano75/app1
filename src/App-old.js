import React, {useEffect, useState} from 'react';
import './App.css';
import Chart from 'chart.js';

const App = ()=>{
  const APP_ID = "0f18e732";
  const APP_KEY= "80d5a28dbb060aa07afc8f8dacdc15c1";


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] =useState("");

  useEffect(()=>{
    getData();
  },[query]);

  const getData = async ()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  } 
  
  const updateSearch = e =>{
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
  }
  
  return(
  <div style={container}>
    <form onSubmit={getSearch} className="transparent">
      <input type="text" value={search} onChange={updateSearch} className="tenpxpad searchbar"></input>
      <button type="submit" className="tenpxpad searchbutton">Search</button>
    </form>
    <div className="flexcontainer">
    {recipes.map(recipe=>(
          <Recipe 
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
          
        ))} 
    </div>
   
    {/* <Container /> */}

  </div>
    
  );
}

const Recipe = ({title,calories,image,ingredients}) =>{
  return (
    <div className="recipe">
      <div className="recipewrapper">
        <h1>{title}</h1>
        <p>Calories: {parseInt(calories)}</p>
        <img src={image} alt=""></img>
        <ul>{ingredients.map((ingredient,i)=>(
        <li key={i}>{ingredient.text}</li>
        ))}</ul>
      </div>
     
    </div>
  );
}



function H1(props){
  return(
  <h1>{props.text}</h1>
  );
}

const chartdataA = [0, 10, 5, 2, 20, 30, 45, 65, 71];
const chartdataB = [5, 15, 20, 7, 25, 39, 55, 75, 91];
const chartdata1A = [0, 10, 5, 2, 20, 30, 45, 65, 71];
const chartdata1B = [5, 15, 20, 7, 25, 39, 55, 75, 91];
const chartdata2A = [0, 10, 5, 2, 20, 30, 45, 65, 71];
const chartdata2B = [5, 15, 20, 7, 25, 39, 55, 75, 91];


function Container(){
  return (
    <div style={container}>
      {/* <H1 
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
      */}
      {/* <ProgressBarV2 
        bar2={bluebar}
        bar1={orangebar}
        meter={meter}
        todate={10}
        total="300"
      />  */}

      <table style={{margin:"auto"}}>
        <tr>
          <td colSpan="2">
            <canvas id="myChart" width="1000" height="300" style={{position:"relative",left:"0px"}}></canvas>
          </td>
        </tr>
        <tr>
          <td>
            <canvas id="myChart1" width="500" height="300" ></canvas>
          </td>
          <td>
            <canvas id="myChart1.1" width="500" height="300" ></canvas>
          </td>
        </tr>
        <tr>
          <td>
            <canvas id="myChart2" width="500" height="300"></canvas>
          </td>
          <td>
            <canvas id="myChart2.1" width="500" height="300"></canvas>
          </td>
        </tr>
      </table>
      <Graph id="myChart" type="bar" color1="red" color2="#8ceb34" title="CCL Sioux Falls 1" data1 = {chartdataA} data2 = {chartdataB}/>
      <Graph id="myChart1" type="horizontalBar" color1="yellow" color2="purple" title="Johnson & Johnson" data1 = {chartdata1A} data2 = {chartdata1B}/>
      <Graph id="myChart1.1" type="line" color1="yellow" color2="purple" title="Johnson & Johnson" data1 = {chartdata1A} data2 = {chartdata1B}/>
      <Graph id="myChart2" type="horizontalBar" color1="orange" color2="blue" title="P&G" data1 = {chartdata2A} data2 = {chartdata2B}/>
      <Graph id="myChart2.1" type="line" color1="orange" color2="blue" title="P&G" data1 = {chartdata2A} data2 = {chartdata2B}/>

    </div>
  )
}

const listelements = ["Dashboard","Other"];

const list = listelements.map((listelement)=>
<li>{listelement}</li>
);

class Graph extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.doit();
    this.interval = setInterval(() => this.doit(), 100);
  }


  doit(){
    var ctx1 = document.getElementById(this.props.id).getContext('2d');
    var chart = new Chart(ctx1, {
        // The type of chart we want to create
        type: this.props.type,
    
        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
            datasets: [
              {
                label: 'Budget',
                backgroundColor: this.props.color1,
                borderColor:this.props.color1,
                data: this.props.data1,
                fill:false
              },
              {
                label: 'Actual',
                backgroundColor: this.props.color2,
                borderColor: this.props.color2,
                data: this.props.data2,
                fill:false
              }]
        },
    
        // Configuration options go here
        options: {
          title: {
            display: true,
            text: this.props.title
          },
          responsive:true,
          maintainAspectRatio: false,
          animation:{
            easing:"easeOutQuint",
            duration: 1
          }
        }
    });
  }
  
  render(){
    return(
      null
    );
  }
}

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
    if(this.state.todate<=this.state.total){
    this.setState(prevState => ({
      todate: prevState.todate + 1,
      bar1:{ ...this.state.bar1, width:(prevState.todate/prevState.total).toLocaleString("en", {style: "percent"})},
      bar2:{ ...this.state.bar2, width:((prevState.total-prevState.todate)/prevState.total).toLocaleString("en", {style: "percent"}).toLocaleString("en", {style: "percent"})}
    }));
  }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 100);
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
      <showPercent num={this.props.bar2.width} />
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

function showPercent(props){
  if(props.num !== "0%"){
    console.Log("lalala");
    return <h2>props.num</h2>;
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

const bluebar =  {
  "border-radius": "0px 10px 10px 0px",
  display: "inline-block",
  backgroundColor: "#66ffed",
};
var orangebar = {
  "border-radius": "10px",
  display: "inline-block",
  backgroundColor: "#ffab66",
};

const meter = {
  "border-radius": "10px",
  border: "solid black 1px",
  margin: "5px",
  backgroundColor: "#66ffed"
};

const container = {
  // border:"1px solid black",
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
