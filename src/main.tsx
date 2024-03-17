import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Schedules } from './components/Schedules.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/Schedule' element={<Schedules/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
)
