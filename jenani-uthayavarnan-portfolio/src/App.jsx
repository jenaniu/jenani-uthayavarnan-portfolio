import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'

function App() {

  return (
    <>
<BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/projects" element={<ProjectsPage />} />

    </Routes>
</BrowserRouter>
    </>
  )
}

export default App
