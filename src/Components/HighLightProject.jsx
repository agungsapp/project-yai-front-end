

function HighLightProject() {


  const portos = Array(6).fill(null);

  return (
    <div className="container mx-auto py-10 px-16 mt-16 bg-base-200">

      <h2 className="text-sm  md:text-2xl  font-semibold text-center capitalize mb-10">HighLight Project</h2>

      <div className="grid grid-cols-3 gap-4">

        {portos.map((_, index) => (
          <div key={index} className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        ))}


      </div>
    </div>
  )
}

export default HighLightProject