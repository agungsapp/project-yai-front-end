// import React from 'react'
import HeroComponent from '../Components/HeroComponent'
import MitraKamiComponent from '../Components/MitraKamiComponent'
import KenapaKami from '../Components/KenapaKami'
import IceBreaking from '../Components/IceBreaking'

function Home() {
  return (
    <div className='p-0'>
      <HeroComponent />
      <IceBreaking />
      <MitraKamiComponent />
      <KenapaKami />
    </div>
  )
}

export default Home