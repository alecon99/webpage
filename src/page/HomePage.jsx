import React from 'react'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import Footer from '../components/Footer/Footer'
import AllSections from '../components/HomeSections/AllSections/AllSections'

const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <AllSections/>
      <Footer/>
    </>
  )
}

export default HomePage