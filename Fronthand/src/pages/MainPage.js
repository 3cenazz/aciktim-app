import halalmeat from '../images/halalmeat.png'
import burgers from '../images/burgers.png'
import React from 'react'
import "../styles/MainPage.css"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'




function MainPage() {

  return (
    <div>
      <Navbar />

      <div className="home">

        <div className="headerContainer" >
          <img src={halalmeat} className='halalmeat' />
          <img src={burgers} className='burgers' />

        </div>

      </div>
      <Footer />
    </div>

  )
}

export default MainPage
