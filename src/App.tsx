import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HamburgerNavbar from './components/Navbar'
import PlatformBox from './components/PlatformsBox'
import TextBox from './components/TextBox'

function App() {
  return (
    <>
      <section>
        <div className='grid grid-cols-2'>
          <div className='col-span-full z-20 sticky top-0'>
            <HamburgerNavbar />
          </div>
          <div className='col-span-full'>
            <Hero />
          </div>
          <div className='col-span-full'>
            <PlatformBox />
          </div>
          <div className='bg-[var(--teal)] col-span-full'>
            <TextBox textTheme='dark' picture="assets/images/Cuphead Trio A.svg" tittle="Buy the game with DLC!" bodyText="Cuphead goodness wiith delicous last course!" buttonText="Tap to Rap!"/>
          </div>
          <div className='bg-[var(--blue)] col-span-full'>
            <TextBox  picture="assets/images/cuphead-mumgn-bothers.svg" tittle="Buy the original game! " bodyText="Don’t deal with the Devil!" buttonText="Tap to grab!"/>
          </div>
          <div className='bg-[var(--yellow)] col-span-full'>
            <TextBox  picture="assets/images/2M_Cuphead.gif" tittle="Read the Reviews!" bodyText="Don’t deal with the Devil!" buttonText="Let’s convince you!"/>
          </div>
          <div className='col-span-full'>
            <Footer />
          </div>
        </div>
      </section>
    </>
  )
}

export default App
