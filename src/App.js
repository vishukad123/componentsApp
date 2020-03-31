import React from 'react';
import logo from './logo.svg';
import './App.css';
import CompA from './componentA';
import CompB from './componentB';
import CompC from './componentC';


function App() {
  return (
    
    <div className="App">
      <img src={logo} className="App-logo"/>
      <div style={{display:'flex',justifyContent:"center",alignItems:'center'}}>
      <CompA/>
     <CompB/>
      </div>
    
     <CompC/>
    </div>
    
  );
}

export default App;
