import { useState } from 'react'
import Hero from './Hero'
import Navbar from '../components/Navbar'
import LogisticsAndWelcome from '../components/LogisticsAndWelcome'
import SermonsPreview from '../components/SermonsPreview'
import MinistriesGrid from '../components/MinistriesGrid'
import EventsAndFooter from '../components/EventsAndFooter'
import './App.css'

function App() {
  

  return (
    <>
    <Navbar/>
    <Hero/>
    <LogisticsAndWelcome/>
    <SermonsPreview/>
    <MinistriesGrid/>
    <EventsAndFooter/>
    
    
     
    </>
  )
}

export default App
