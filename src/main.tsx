import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Contact, Schedules, Store, Instructors, Classes, Prices, Product, Cart } from './components'
import { Provider } from 'react-redux'
import { store } from './state/store.ts'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <Provider store={store}>
    <Router>
      <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Schedule' element={<Schedules/>}/>
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Store' element={<Store/>}/>
          <Route path='/Instructors' element={<Instructors/>}/>
          <Route path='/Classes' element={<Classes/>}/>
          <Route path='/Prices' element={<Prices/>}/>
          <Route path={`/Store/:id`} element={<Product/>}/>
          
        
        
      </Routes>
    </Router>
  </Provider>
  </React.StrictMode>
)
