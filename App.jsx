import React from 'react'
import './App.css'
import MainContent from "/components/MainContent.jsx"
import Footer from "/components/Footer.jsx"
import Photo from "/components/Photo.jpg"

function App(){
  return(
    <container>
      <div className="Page">
        <img src={Photo} className="MyPhoto"/>
        <MainContent/>
        <Footer/>
      </div>
    </container>
  )
}

export default App
