// import React from 'react'
import Logo from '../assets/logo.png'

function FooterComponent() {
  return (
    <footer className="footer p-10 bg-white grid grid-cols-1 md:grid-cols-4 text-slate-800 border-2 border-slate-300">
      <div>
        <img src={Logo} alt="Logo ProjectYai" className='w-1/2 footer-title' />
        <p>Project yai adalah layanan jasa pembuatan website terpercaya sejak 2020, sudah banyak company yang bekerja sama dengan kami.</p>

      </div>
      <nav>
        <header className="footer-title">Layanan</header>
        <a className="link link-hover">Redesign UI/UX</a>
        <a className="link link-hover">Web Development</a>
        <a className="link link-hover">Mobile Development</a>
        <a className="link link-hover">Dekstop Development</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  )
}

export default FooterComponent