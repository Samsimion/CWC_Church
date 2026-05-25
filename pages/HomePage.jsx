import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Hero from '../src/Hero'
import LogisticsAndWelcome from '../components/LogisticsAndWelcome'
import SermonsPreview from '../components/SermonsPreview'
import MinistriesGrid from '../components/MinistriesGrid'
import EventsAndFooter from '../components/EventsAndFooter'

function HomePage(){
    return(
        <>
          
        <Navbar/>
        <Hero/>
        <LogisticsAndWelcome/>
        <SermonsPreview/>
        <MinistriesGrid/>
        <EventsAndFooter/>
    
        </>
    )
}export default HomePage