import React from 'react'
import Slider from 'react-slick';

function MitraKamiComponent() {


  return (
    <section className='p-3 mt-5 bg-white max-w-[1400px] mx-auto'>
      <p className='text-2xl  font-semibold text-center capitalize'>telah dipercaya oleh</p>
      <div className='mt-10 flex gap-10 justify-center flex-row'>

        <div className="card p-2 flex justify-center w-36 bg-base-200 bl shadow-xl ">
          <img src="https://i.postimg.cc/RFYpv1vF/image.png" className='w-32 block mx-auto' alt="pertamina logo" />
        </div>
        <div className="card p-2 flex justify-center w-36 bg-base-200 bl shadow-xl ">
          <img src="https://i.postimg.cc/t4ShwKk0/logo-uns-biru.png" className='w-20 block mx-auto' alt="uns logo" />
        </div>
        <div className="card p-2 flex justify-center w-36 bg-base-200 bl shadow-xl ">
          <img src="https://i.postimg.cc/26m8w6WC/image.png" className='w-32 block mx-auto' alt="bawaslu logo" />
        </div>
        <div className="card p-2 flex justify-center w-36 bg-base-200 bl shadow-xl ">
          <img src="https://i.postimg.cc/HkXghmdn/image.png" className='w-32 block mx-auto' alt="uml logo" />
        </div>

      </div>
    </section>
  )
}

export default MitraKamiComponent