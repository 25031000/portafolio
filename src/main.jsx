import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './output.css'
import AboutView from '../components/AboutView.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import serveDelay from '../libs/Delay.js'

const App = lazy(async () => {
  let res = await serveDelay();
  if (res) return import('./App.jsx')
})

ReactDOM.createRoot(document.getElementById('root')).render(


  <Router>
    <Suspense fallback={<section className='h-screen w-screen bg-tertiary text-primary'>Helllo</section>}>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about' element={<AboutView />} />
      </Routes>
    </Suspense>
  </Router>


)
