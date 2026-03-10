
import './App.css';
// use HashRouter so that refreshing or manually entering a nested path
// does not trigger a server 404. The hash-based URLs are entirely
// handled client-side and never sent to the server.
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
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
    // location.hash may contain the router path when using HashRouter
    // (e.g. "#/project/1" or "#/project/1#section"). We only want the
    // part after the final '#' if it doesn't look like a path.
    const rawHash = location.hash.slice(1) // strip leading '#'

    // split on additional '#' characters and take last segment
    const parts = rawHash.split('#')
    const anchor = parts[parts.length - 1]

    // if anchor is empty or looks like a path (starts with '/'), treat as
    // no anchor and just scroll to top
    if (anchor && !anchor.startsWith('/')) {
      // wait for DOM to render, then scroll to element
      setTimeout(() => {
        const element = document.getElementById(anchor)
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
      // Scroll to top if no valid anchor
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  return null
}

const App = () => {
  return (
    <Router basename="/">
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
