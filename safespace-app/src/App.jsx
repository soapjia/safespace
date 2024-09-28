import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Chatbot from './Chatbot';
import Mainscreen from './Mainscreen';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element= {<Chatbot/>}/>
          <Route path = "/Mainscreen" element= {<Mainscreen/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
 }
 
 
 export default App;
 
