import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


function HighLightProject() {
  const [portofolio, setPortofolio] = useState([])
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    fetchPortofolio()
  }, [])

  const fetchPortofolio = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/admin-portofolio')
      setPortofolio(response.data)
      setIsError(false)
    } catch (error) {
      console.error('Gagal fetch data : ' + error)
      setIsError(true)
    }
  }

  return (
    <div className="container mx-auto py-10 px-16 mt-16 bg-base-200">
      <h2 className="text-sm  md:text-2xl  font-semibold text-center capitalize mb-10">HighLight Project</h2>

      {isError || portofolio.length === 0 ? (
        <div className="text-center text-slate-500 text-lg">Maaf portofolio gagal di muat !</div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-6">
          {portofolio.map((porto, index) => (
            <div key={index} className="card w-full bg-base-100 shadow-xl">
              <figure><img src={porto.gambar} alt={porto.judul} /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  {porto.judul}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{porto.deskripsi}</p>
                <p className="mt-10">Tech Stack : </p>
                <div className="card-actions justify-end ">
                  <div className="badge badge-outline">Laravel</div>
                  <div className="badge badge-outline">Tailwind CSS</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default HighLightProject;
