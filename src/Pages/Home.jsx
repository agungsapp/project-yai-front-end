import React from 'react'
import HeroComponent from '../Components/HeroComponent'
import MitraKamiComponent from '../Components/MitraKamiComponent'
import KenapaKami from '../Components/KenapaKami'

function Home() {
  return (
    <div className='p-0'>
      <HeroComponent />
      <MitraKamiComponent />
      <KenapaKami />
    </div>
  )
}

export default Home