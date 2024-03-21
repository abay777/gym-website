import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Contact, Schedules, Store, Instructors, Classes } from './components'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/Schedule' element={<Schedules/>}/>
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Store' element={<Store/>}/>
        <Route path='/Instructors' element={<Instructors/>}/>
        <Route path='/Classes' element={<Classes/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
)
