import React from "react";

function Card({ title, price, img }) {
  return (
    <>
      <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center">
        <div className="sellcard">


          <div className="w-5/5 max-w-lg bg-white border border-gray-200 rounded-lg shadow-2xl palet">
            <a href="#">

              <img className="p-8 rounded-t-lg" src={img} alt="product image" />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
              </a>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">{price + '$'}</span>
                <a href="#" className="text-owhite bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center owhite dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-95 duration-75">Add to cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}
export default Card