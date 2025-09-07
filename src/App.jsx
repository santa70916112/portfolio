import { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Context
import { PortfolioProvider } from './context/PortfolioContext'

// Components
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

// CSS
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })

    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div id="preloader">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <PortfolioProvider>
      <Router>
        <div className="App">
          <Header />
          <main className="main">
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <About />
                  <Stats />
                  <Skills />
                  <Resume />
                  <Portfolio />
                  <Testimonials />
                  <Contact />
                </>
              } />
              <Route path="/*" element={
                <>
                  <Hero />
                  <About />
                  <Stats />
                  <Skills />
                  <Resume />
                  <Portfolio />
                  <Testimonials />
                  <Contact />
                </>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </PortfolioProvider>
  )
}

export default App