import React, { useEffect, useState } from 'react';
import './App.css';
import { connect, useSelector } from 'react-redux';
import { fetchDataRequest, fetchData } from './actions/boredFetch';






function App(props) {
  

  const [started, setStarted] = useState("Bored?")

  const clickHandler = () => {
    props.fetchData();
    setStarted("Still Bored?")
  }


  return (
    
    <div className="App">
      
    <h1>{started}</h1>+
    <h1>{props.activity}</h1>
    {props.loading && <h1>LOADING</h1>}
     {props.error && <h1>{props.error}</h1>}
     <button className="thebutton"onClick={clickHandler}>I'm bored</button>
    </div>
   
  );
}



const mapDispatchToProps = {
  fetchData
}
const mapStateToProps = state => {

  return {
    activity: state.activity,
    loading: state.loading,
    data: state.data,
    error: state.error
  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
