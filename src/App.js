
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <main className='main'>
        <Hero />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </>
  )
}


export default App;
