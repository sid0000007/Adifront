import React from 'react'

function gazzeticard(shoe, title) {
  return (
    <>
      <div className="sellcard ">
        <div className=" animini w-5/5 rounded-3xl shadow-2xl bg-slate-200">
          <a href="#">
            <img className="py-0 px-12 rounded-t-lg" src={shoe} alt="product image" />
          </a>

          <div className="px-5 pb-5">

            <div className="flex flex-col gap-7 items-center justify-center">
              <h1>{title}</h1>

              {/* <a href="#" target="_blank"
                className="secon-btn transit">Add to Cart</a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default gazzeticard