import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import "./index.css";
import Home from './Home.jsx'
import Counder from './Counder.jsx'
import About from './About.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Home/>
    <Counder/>
    <About/>

  </StrictMode>,
)
