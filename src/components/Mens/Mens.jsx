import React from 'react'
import skeletonmens from '../../components/Cards/skeletons/skeletonmens'
import './Mens.css'
import useFetch from '../../hooks/useFetch'
import '../Hero/Hero.css'
import '../../index.css'
import shoe02 from '../../images/shoe4.png'
import shoe03 from '../../images/shoe3.png'




export function gazzetticard(shoe, title) {
  return (
    <div className="sellcard ">
      <div className=" animini w-5/5 rounded-3xl shadow-2xl bg-slate-200">
        <a href="#">
          <img className="py-0 px-12 rounded-t-lg" src={shoe} alt="product image" />
        </a>


        <div className="px-5 pb-5">

          <div className="flex flex-col gap-7 items-center justify-center">
            <h1>{title}</h1>

            <a href="#" target="_blank"
              className="secon-btn transit">Add to Cart</a>
          </div>
        </div>
      </div>
    </div>
  );

}

function Mens() {
  const { loading, error, data } = useFetch(import.meta.env.VITE_API_URL + '/api/mens-products?populate=*')

  if (loading) return <div className="text-center py-6">
    <div role="status">
      <svg aria-hidden="true" className="inline w-8 h-8 text-white-200 animate-spin  fill-orange-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  </div>
  if (error) return <p>Error..</p>


  console.log(data);

  return (


    <section className="container">

      <div className="mainhero">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl  lg:text-6xl text-center py-16">Gazzeti's</h1>
        <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center">

          <div className="first">
            {gazzetticard(shoe03, "Gazzeti Blue")}
          </div>
          <div className="first">
            {gazzetticard(shoe02, "Gazzeti Brown")}
          </div>
          <div className="first">
            {gazzetticard(shoe03, "Gazzeti Green")}
          </div>
        </div>


        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl  lg:text-6xl text-center py-16">Sneakers</h1>
        <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center">
          {data.data.filter((prod) => prod.attributes.Subcategory === "sneaker").map(skeletonmens)}
        </div>

        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl  lg:text-6xl text-center py-16">Sports Shoes</h1>
        <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center">
          {data.data.filter((prod) => prod.attributes.Subcategory === "sportshoe").map(skeletonmens)}
        </div>


        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl  lg:text-6xl text-center py-16">Shirts</h1>
        <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center">
          {data.data.filter((prod) => prod.attributes.Subcategory === "tshirt").map(skeletonmens)}
        </div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl  lg:text-6xl text-center py-16">Pants</h1>
        <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center">
          {data.data.filter((prod) => prod.attributes.Subcategory === "pant").map(skeletonmens)}
        </div>

        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl  lg:text-6xl text-center py-16">Caps</h1>
        <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center">
          {data.data.filter((prod) => prod.attributes.Subcategory === "caps").map(skeletonmens)}
        </div>



      </div>

    </section>


  )

}

export default Mens;