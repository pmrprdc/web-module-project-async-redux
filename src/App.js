import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import dataFetch from './actions/boredFetch';







function App(props) {
  return (
    
    <div className="App">
    <h1>{props.activity}</h1>
     <h1>Bored?</h1>
     <h2>Click the button below to get a new activity</h2>
     <button>I'm bored</button>
    </div>
   
  );
}



const mapDispatchToProps = {
  dataFetch
}
const mapStateToProps = state => {

  return {activity: state.activity}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
