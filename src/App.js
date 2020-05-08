import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterView from './provider/counter-view';

function App() {
  return (
    <div className="App">
     <hi>React Hooks context Demo</hi>
     <CounterView></CounterView>
    </div>
  );
}

export default App;
