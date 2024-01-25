
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/NavbarComponent'
import Home from './Pages/Home'
import About from './Pages/About'
import Portofolio from './Pages/Portofolio'
import FooterComponent from './Components/FooterComponent'

function App() {

  return (
    <div className='border-2 border-slate-800'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/portofolio' element={<Portofolio />}></Route>
        </Routes>
      </Router>
      <FooterComponent />
    </div>
  )
}

export default App
