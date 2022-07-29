import React from 'react'
import './App.css'
import MainContent from "/components/MainContent.jsx"
import Footer from "/components/Footer.jsx"

function App(){
  return(
    <container>
      <div className="Page">
        <img src="./components/Photo.jpg" className="MyPhoto"/>
        <MainContent/>
        <Footer/>
      </div>
    </container>
  )
}

export default App
