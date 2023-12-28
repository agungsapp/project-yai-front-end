import React from 'react'
import { seoIcon, timIcon, secureIcon, canggihIcon, profesionalIcon, dukunganIcon, universalIcon, analyticIcon } from '../assets/kenapa/IconKenapa.js'

function KenapaKami() {

  const items = [
    {
      title: "SEO Friendly",
      description: "Membangun website sesuai dengan Google guidelines sehingga, situs mudah untuk ditemukan pada halaman search engine.",
      icon: (
        <img src={seoIcon} className='w-16 h-16' alt="" />
      )
    },
    {
      title: "Tim Handal",
      description: "Kami selalu melaukan analisis dengan hati hati dengan mempertimbangkan pengalaman pengguna yang terbaik",
      icon: (
        <img src={timIcon} className='w-16 h-16' alt="" />
      )
    },
    {
      title: "Keamanan Tinggi",
      description: "Standar keamanan terkini untuk website pemerintahan dan korporat, memastikan keamanan data dan kepatuhan regulasi.",
      icon: (
        <img src={secureIcon} className='w-16 h-16' alt="" />
      )
    },
    {
      title: "Integrasi Sistem Canggih",
      description: "Keahlian dalam integrasi sistem untuk solusi website yang efektif dan efisien bagi organisasi besar.",
      icon: (<img src={canggihIcon} className='w-16 h-16' alt="" />
      )
    },
    {
      title: "Desain Profesional",
      description: "Desain yang modern, responsif, dan mencerminkan profesionalisme organisasi Anda.",
      icon: (<img src={profesionalIcon} className='w-16 h-16' alt="" />
      )
    },
    {
      title: "Dukungan Jangka Panjang",
      description: "Menawarkan dukungan dan pemeliharaan berkelanjutan untuk keandalan dan performa website Anda.",
      icon: (<img src={dukunganIcon} className='w-16 h-16' alt="" />
      )
    },
    {
      title: "Aksesibilitas Universal",
      description: "Pengembangan website yang mudah diakses dan digunakan, memenuhi standar aksesibilitas publik.",
      icon: (<img src={universalIcon} className='w-16 h-16' alt="" />
      )
    },
    {
      title: "Analitik Terperinci",
      description: "Pelaporan dan analisis mendalam untuk pemantauan kinerja dan pengambilan keputusan yang efektif.",
      icon: (<img src={analyticIcon} className='w-16 h-16' alt="" />
      )
    },
  ];

  return (
    <section className='mt-10 bg-slate-100'>
      <div className=' py-11 md:py-16'>
        <p className=' text-sm md:text-2xl  font-semibold text-center capitalize'>kenapa harus memilih kami ?</p>
        {/*         <p className='text-center mt-2'>
          Mengapa kami adalah yang terbaik di antara yang terbaik ?, dari banyaknya <br />
          jasa pembuatan website yang tersebar di internet.
        </p>*/}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-20 mt-20 px-10">


          {items.map((item, index) => (
            <div key={index} className='flex flex-col gap-3 items-center'>
              <div className='p-2  mx-auto rounded-full block'>
                {item.icon}
              </div>
              <p className='text-center font-semibold'>{item.title}</p>
              <p className='block text-center text-xs md:text-base'>{item.description}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default KenapaKami