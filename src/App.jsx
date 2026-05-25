import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import PlanYourVisitPage from '../pages/PlanYourVisitPage'
import SermonPage from '../pages/SermonPage'

import './App.css'

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/visit" element={<PlanYourVisitPage />} />
        <Route path="/sermons" element={<SermonPage/>}/>
      </Routes>
    </Router>
    
     
    </>
  )
}

export default App
