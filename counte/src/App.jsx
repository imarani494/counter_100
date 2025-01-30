import React from 'react';
import ViewCount from './components/ViewCount';
import { startAutoIncrement } from './view/CounterService';
 
import './App.css'
const App = () => {
  startAutoIncrement();
  return (
    <div className="App">
     <ViewCount/>
    </div>
  );
};

export default App;