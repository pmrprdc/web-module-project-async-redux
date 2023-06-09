import React from 'react';
import './App.css';
import axiosInstance from './axiosService';
import store from './store';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

const getQuotes = async () => {
	const response = await axiosInstance.get();
	console.log(response.data);
};


console.log(getQuotes())


function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <h1></h1>
     <h1>Bored?</h1>
     <h2>Click the button below to get a new activity</h2>
     <button>I'm bored</button>
    </div>
    </Provider>
  );
}

export default App;