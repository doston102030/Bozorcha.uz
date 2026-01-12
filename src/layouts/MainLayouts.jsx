import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

function MainLayouts() {
  return (
    <>
      <Navbar />
      <main className="grow py-10">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayouts
