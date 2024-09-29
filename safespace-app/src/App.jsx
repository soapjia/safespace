import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ChatbotForm from './ChatbotForm';
import Mainscreen from './Mainscreen';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element= {<ChatbotForm/>}/>
          <Route path = "/Mainscreen" element= {<Mainscreen/>}/>
          <Route path = "/ChatbotForm" element= {<ChatbotForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
 }
 
 
 export default App;
 
