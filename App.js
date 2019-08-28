import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./syle.css" ;

function App() {
  return (
    <div className="App"> 
    <div style={{border:"solid 1px black",maxWidth:'100vw'}}> 

<h1 className="title red">My title</h1>

<br></br>

<img src={logo} />

<br/>

<img src="/logo512.png/" />


</div>
  
  </div>

    
  );
  }

export default App;
