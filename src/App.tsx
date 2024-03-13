import './App.css'
import HamburgerNavbar from './components/Navbar'

function App() {
  return (
    <>
      <div className='grid grid-cols-2'>
        <div className='col-span-full'>
          <HamburgerNavbar />
        </div>
      </div>
    </>
  )
}

export default App
