import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Experiences from './components/Experiences/Experiences'
import Project from './components/Projects/Project'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'


const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      
      <Header />

      <main>
        <About />
        <Experiences />
        <Project/>
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />

    </div>
    

  )
}


export default App
