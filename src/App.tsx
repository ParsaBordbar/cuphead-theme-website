import './App.css'
import Hero from './components/Hero'
import HamburgerNavbar from './components/Navbar'

function App() {
  return (
    <>
      <section>
        <div className='grid grid-cols-2'>
          <div className='col-span-full'>
            <HamburgerNavbar />
          </div>
          <div className='col-span-full'>
            <Hero />
          </div>
        </div>
      </section>
    </>
  )
}

export default App
