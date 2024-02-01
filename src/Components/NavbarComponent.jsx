
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';

function NavbarComponent() {




  return (
    <div className="navbar bg-base-200 sticky shadow-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60">
            <li><a>Home</a></li>
            <li><a>Tentang Kami</a></li>
            <li><a>Portofolio</a></li>
            <li><a>Tim Kami</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl hover:bg-slate-100"><img className='w-32 ' src={Logo} alt="" /></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink className='nav-link' to="/">Home</NavLink></li>
          <li><NavLink className='nav-link' to="/about">Tentang Kami</NavLink></li>
          <li><NavLink className='nav-link' to="/portofolio">Portofolio</NavLink></li>
          <li><a className='nav-link'>Tim Kami</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-basic hidden">Hubungi Admin</a>
      </div>
    </div>
  );
}

export default NavbarComponent