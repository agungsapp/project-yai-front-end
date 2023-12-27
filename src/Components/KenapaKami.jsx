import React from 'react'

function KenapaKami() {
  return (
    <section className='mt-10 bg-slate-100'>
      <div className='py-16'>
        <p className='text-2xl  font-semibold text-center capitalize'>kenapa harus memilih kami ?</p>
        {/*         <p className='text-center mt-2'>
          Mengapa kami adalah yang terbaik di antara yang terbaik ?, dari banyaknya <br />
          jasa pembuatan website yang tersebar di internet.
        </p>*/}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-20 mt-20 px-10">

          {Array.from({ length: 8 }, (_, index) => (

            <div key={index} className='flex flex-col gap-3 items-center'>
              <div className='p-2 bg-slate-500 mx-auto rounded-full block'>
                <svg xmlns="http://www.w3.org/2000/svg" color='#000' fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                </svg>
              </div>
              <p className='text-center font-semibold'>SEO Friendly</p>
              <p className='block text-center'>Membangun website sesuai dengan Google guidelines sehingga, situs mudah untuk ditemukan pada halaman search engine.</p>
            </div>

          ))}

        </div>
      </div>
    </section>
  )
}

export default KenapaKami