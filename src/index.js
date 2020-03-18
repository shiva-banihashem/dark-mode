import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [coinSelected, setCoinSelected] = useState([]);
  const [coinName,setCoinName]= useState("");
   useEffect(() => {
   
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => {

        setCoinData(res.data);
        setCoinName(res.data[0].name);})
      .catch(err => console.log(err));
  
      
   }, []);
 const  handleSubmit=(event) =>{
   
    event.preventDefault();
    
    
  //Set selected coin to display
      let result = coinData.filter(coin => {return coin.name === coinName})

     setCoinSelected(result);
    
    
    
  }
  
     
    const handleChange= (event) => {
     
      setCoinName(event.target.value);
      
      }
      
      
    

      
  return (
    <div className="App">
      <Navbar/>
      <form onSubmit={handleSubmit} > 
        <label>
          <h2>Pick your favorite Coin to display the graph</h2>
          
          <select value={coinName} onChange={handleChange}  >
          
            {coinData.map( coin => 
              
            <option key={coin.name} value={coin.name}   >
             
             {coin.name}
            </option>)}
            

            
            
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Charts coinData={coinSelected} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
