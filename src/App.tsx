import './App.css'
import Hero from './components/Hero'
import HamburgerNavbar from './components/Navbar'
import PlatformBox from './components/PlatformsBox'
import TextBox from './components/TextBox'

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
          <div className='col-span-full'>
            <PlatformBox />
          </div>
          <div className='bg-[var(--teal)] col-span-full'>
            <TextBox textTheme='dark' picture="src/assets/images/Cuphead Trio A.svg" tittle="Buy the game with DLC!" bodyText="Cuphead goodness wiith delicous last course!" buttonText="Tap to Rap!"/>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
