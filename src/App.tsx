import Hero from './components/Hero'
import About from './components/About'
import Testimonial from './components/Testimonial'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <About />
      <Testimonial />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
