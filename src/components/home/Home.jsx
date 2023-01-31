import React from 'react'
import About from '../about/About'
import Contact from '../contact/Contact'
import Feature from '../feature/Feature'
import Header from '../header/Header'
import Navbar from '../navbar/Navbar'
import Offer from '../offer/Offer'

const Home = () => {
  return (
    <>
    <Navbar />
    <Header />
    <Feature />
    <Offer />
    <About />
    <Contact />
    </>
  )
}

export default Home