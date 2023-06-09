import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchDataRequest, fetchData } from './actions/boredFetch';







function App(props) {






  return (
    
    <div className="App">
    <h1>{props.activity}</h1>
     <h1>Bored?</h1>
     <h2>Click the button below to get a new activity</h2>
     <button onClick={props.fetchData}>I'm bored</button>
    </div>
   
  );
}



const mapDispatchToProps = {
  fetchData
}
const mapStateToProps = state => {

  return {activity: state.activity,
    loading: state.loading,
    data: state.data,
    error: state.error
  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
