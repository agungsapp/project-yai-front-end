import React from 'react'
import Slider from 'react-slick';

function MitraKamiComponent() {


  return (
    <section className='p-3 mt-5 bg-white max-w-[1400px] mx-auto'>
      <p className='text-2xl text-slate-500 font-semibold text-center capitalize'>kerjasama sebelumnya</p>
      <div className='mt-16 flex gap-10 justify-center flex-row'>

        <div className="card w-36 bg-base-200 bl shadow-xl ">
          <img src="https://i.postimg.cc/RFYpv1vF/image.png" className='w-32 block mx-auto' alt="pertamina logo" />
        </div>
        <div className="card w-36 bg-base-200 bl shadow-xl ">
          <img src="https://i.postimg.cc/RFYpv1vF/image.png" className='w-32 block mx-auto' alt="pertamina logo" />
        </div>
        <div className="card w-36 bg-base-200 bl shadow-xl ">
          <img src="https://i.postimg.cc/RFYpv1vF/image.png" className='w-32 block mx-auto' alt="pertamina logo" />
        </div>
        <div className="card w-36 bg-base-200 bl shadow-xl ">
          <img src="https://i.postimg.cc/RFYpv1vF/image.png" className='w-32 block mx-auto' alt="pertamina logo" />
        </div>

      </div>
    </section>
  )
}

export default MitraKamiComponent