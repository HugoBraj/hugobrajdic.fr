
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <main className='main'>
        <Hero />
        <Projects />
        <Contact />
      </main>
    </>
  )
}


export default App;
