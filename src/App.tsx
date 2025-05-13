import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Process from './components/Process'
import Benefits from './components/Benefits'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
