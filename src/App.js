
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import ProjectDetail from './components/projects/ProjectDetail';

// Component to handle scroll to anchor after navigation
const ScrollToAnchor = () => {
  const location = useLocation()

  useEffect(() => {
    // Extract hash from location
    const hash = location.hash.slice(1) // Remove the '#'
    
    if (hash) {
      // Wait for DOM to render, then scroll to element
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          // Get the navbar height (fixed at 80px)
          const navbarHeight = 80
          const elementPosition = element.getBoundingClientRect().top + window.scrollY
          const offsetPosition = elementPosition - navbarHeight
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 0)
    } else {
      // Scroll to top if no hash
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  return null
}

const App = () => {
  return (
    <Router>
      <ScrollToAnchor />
      <Navbar />
      <main className='main'>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Projects />
                <Resume />
                <Contact />
              </>
            }
          />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App;
