import React, { useState } from 'react';
import SermonsArchive from '../components/SermonsArchive'
import Navbar from '../components/Navbar';
import EventsAndFooter from '../components/EventsAndFooter';

function SermonPage(){
    return(
        <>
        <Navbar/>
        <SermonsArchive/>
        <EventsAndFooter/>
        
        
        </>
    )
}export default SermonPage