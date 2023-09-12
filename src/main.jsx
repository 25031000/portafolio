import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AboutView from '../components/AboutView.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/about' element={<AboutView />} />
    </Routes>
  </Router>

  </>
)
