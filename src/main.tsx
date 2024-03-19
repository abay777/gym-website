import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Contact, Schedules, Store } from './components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/Schedule' element={<Schedules/>}/>
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Store' element={<Store/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
)
