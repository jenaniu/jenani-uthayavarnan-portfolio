import { useState } from 'react'
import './styles/global.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <>
<BrowserRouter>
<NavBar />
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
</BrowserRouter>
    </>
  )
}

export default App
