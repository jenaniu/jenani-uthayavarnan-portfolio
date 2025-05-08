import { useState } from 'react'
import './styles/global.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import NavBar from './components/NavBar/NavBar'
import ContactPage from './pages/ContactPage/ContactPage'
import ResumePage from './pages/ResumePage/ResumePage'
import Footer from './components/Footer/Footer'
import MarketingPage from './pages/MarketingPage/MarketingPage'

function App() {

  return (
    <>
<BrowserRouter>
<NavBar />
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/projects" element={<ProjectsPage />} />
    <Route path="/marketing" element={<MarketingPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/resume" element={<ResumePage />} />
    </Routes>
  <Footer />
</BrowserRouter>
    </>
  )
}

export default App
