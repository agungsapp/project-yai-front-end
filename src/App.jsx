
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/NavbarComponent'
import Home from './Pages/Home'
import About from './Pages/About'
import FooterComponent from './Components/FooterComponent'

function App() {

  return (
    <div className='border-2 border-slate-800'>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </Router>
      <FooterComponent />
    </div>
  )
}

export default App
