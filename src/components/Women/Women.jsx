import React from 'react'
import useFetch from '../../hooks/useFetch'
import skeleton from '../Cards/skeleton'
import gazzeticard from '../Cards/gazzeticard'
import shoe02 from '../../images/shoe4.png'
import shoe03 from '../../images/shoe3.png'
import skeletonwomen from '../Cards/skeletons/skeletonwomen'


const Women = () => {



  const { loading, error, data } = useFetch(import.meta.env.VITE_API_URL + '/api/women-products?populate=*')

  if (loading) return <div className="text-center py-6">
    <div role="status">
      <svg aria-hidden="true" className="inline w-8 h-8 text-white-200 animate-spin  fill-orange-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
  </div>
  if (error) return <p>Error..</p>

  console.log(data);
  return (


    <section>


      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl  lg:text-6xl text-center py-14 ">Sports</h1>
      <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center container">
        {data.data.filter((prod) => (prod.attributes.subcategory === "sportshoe")).map(skeletonwomen)}
      </div>

      <section className="">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leadi sm:text-5xl">Premium Gazzeti_
            <span className=" palet rounded-2xl ">Collection</span>
          </h1>

        </div>
      </section>
      <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center">
        {gazzeticard(shoe03, "Gazzeti Blue")}
        {gazzeticard(shoe02, "Gazzeti Brown")}
        {gazzeticard(shoe03, "Gazzeti Green")}
      </div>



      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl  lg:text-6xl text-center py-24 ">Caps</h1>
      <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center container">
        {data.data.filter((prod) => (prod.attributes.subcategory === "caps")).map(skeletonwomen)}
      </div>



      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl  lg:text-6xl text-center py-24 ">Tops</h1>
      <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center container">
        {data.data.filter((prod) => (prod.attributes.subcategory === "tshirt" || prod.attributes.subcategory === "shirt")).map(skeletonwomen)}
      </div>
    </section>
  )
}

export default Women