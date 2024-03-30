import { useState } from 'react'
import Navbar from "./components/Navbar"
import {SpotlightPreview} from './components/Spotlight'
import { Spotlight } from './components/ui/Spotlight'
import Home from './components/Home'
import { LampDemo } from './components/ui/lamp'
import Skills from './components/Skills'
import WorkSection from './components/WorkSection'
import { TypewriterEffectSmoothDemo} from "./components/TypewriterEffectSmoothDemo";
import Footer from './components/Footer'











function App() {
  

  return (
    <>
    
      
    <Navbar/>

    
    <Home></Home>
   

    <SpotlightPreview/>

    
    <LampDemo/>
    <Skills/>
    <WorkSection/>

   <TypewriterEffectSmoothDemo/> 
     <Footer/>
     
    

     

  

    
    
    </>
  )
}

export default App
