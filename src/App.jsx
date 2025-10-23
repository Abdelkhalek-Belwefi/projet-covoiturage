import React from 'react'
import Navbar from './components/homePage/Navbar'
import Header from './components/homePage/Header'
import SearchSection from './components/homePage/SearchSection'
import TransportSection from './components/homePage/TransportSection'
import FeaturesSection from './components/homePage/FeaturesSection'
import ReservationSection from './components/homePage/ReservationSection'
import PopularRoutes from './components/homePage/PopularRoutes'
import ServicesSection from './components/homePage/ServicesSection'
import Footer from './components/homePage/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <SearchSection />
      <TransportSection />
      <FeaturesSection />
      <ReservationSection />
      <PopularRoutes />
      <ServicesSection />
      <Footer />
    </div>
  )
}

export default App