import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';

class  App extends React.Component {
  render(){
  return (<div className="App" >
    <Greeting/>
  </div>
  );
}
}

export default App;
