import React from 'react';
import './App.css';
import axiosInstance from './axiosService';

const getQuotes = async () => {
	const response = await axiosInstance.get();
	console.log(response.data);
};


console.log(getQuotes())


function App() {
  return (
    <div className="App">
     <h1>Bored?</h1>
     <h2>Click the button below to get a new activity</h2>
     <button>I'm bored</button>
    </div>
  );
}

export default App;