import {useEffect, useState, useRef, useCallback} from 'react';     
import './App.css'
import SubBar from './components/SubBar';

function App() { 
  return (
    <div className='main-frame'>      
      <img src="./logo.png" alt=""/>      
      <SubBar/>
    </div>   
  );
}

export default App;
