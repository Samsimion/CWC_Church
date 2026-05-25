import React , {useState} from "react";
import PlanYourVisit from "../components/PlanYourVisit";

import Navbar from "../components/Navbar";
import EventsAndFooter from "../components/EventsAndFooter";


function PlanYourVisitPage(){
    return (
        <>
        <Navbar/>
        <PlanYourVisit/>
        <EventsAndFooter/>
        
        </>
    )
}export default PlanYourVisitPage