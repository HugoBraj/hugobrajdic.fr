
import './App.css';
import About from './components/about/About';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Sidebar from './components/sidebar/Sidebar';
import Projets from './components/projects/Projets';

const App = () => {
  return (
   <>
   <Sidebar />
    <main className='main'>
      <Home></Home>
      <About/>
      <Resume/>
      <Projets/>
    </main>
   </>
  )
}


export default App;
