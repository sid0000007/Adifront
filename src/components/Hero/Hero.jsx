import React from 'react'
import useFetch from '../../hooks/useFetch'
import gazzeticard from '../Cards/gazzeticard'
import skeletonmens from '../Cards/skeletons/skeletonmens'

import './Hero.css'
import '../../index.css'
import shoe02 from '../../images/shoe4.png'
import shoe03 from '../../images/shoe3.png'
import video from '../../images/ad01.mp4'
import bigadidas from '../../images/addidasSVG.svg'
import adid from '../../images/adidasSVG01.svg'
import {motion, useScroll} from "framer-motion"



const Hero = () => {

  const { loading, error, data } = useFetch(import.meta.env.VITE_API_URL + '/api/mens-products?populate=*')
  


  if (loading) return <div className="text-center py-6">
  <div role="status">
    <h1>Wait for 30 to 40 seconds, Due to Render Free Database, Intially website will take some time.</h1>
    <svg aria-hidden="true" className="inline w-8 h-8 text-white-200 animate-spin  fill-orange-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
    </svg>
    <span className="sr-only">Loading...</span>
  </div>
</div>
  if (error) return <h1>Error</h1>

 
  
  return (


    <div className="hero">
      <div className="homeimage">
        <div className="videoDiv">
          <motion.img animate={{ x: [0, 100,0] }} className="adidassvg flex items-center justify-center w-100" src={bigadidas} alt="" />
          {/* add "autplay in the video propertise to play video in loop " */}
          <video src={video} autoPlay muted loop className='video'></video>
        </div>
      </div>



      <section className="gazz_ad py-24">
        <div className=" justify-center align-middle ">
          <div className="flex flex-row justify-around align-middle pb-6">
          <img className="w-28" src={adid} alt="" />
          <h1 className='text-7xl italic'></h1>
          <img className="w-28" src="https://www.bcci.tv/img/bcci-logo.svg" alt="" />
          </div>
          <div className="relative flex flex-wrap items-center justify-center w-full dark:text-gray-50">
           
            <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
              <div className="relative flex flex-shrink-0 w-50 sm:w-auto">
                <img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square" src="https://res.cloudinary.com/dkioj30sz/image/upload/v1708709101/INDIA_CRICKET_ODI_JERSEY_MEN_Blue_JE_0098_25_model_78a5d67c7d.jpg" alt="Image 1" />
              </div>  
              <div className="relative flex flex-shrink-0 w-50 sm:w-auto">
                <img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square" src="https://res.cloudinary.com/dkioj30sz/image/upload/v1708709101/INDIA_CRICKET_ODI_JERSEY_MEN_Blue_JE_0098_42_detail_3a43ea9ca2.jpg" alt="Image 2" />
              </div>
             <div className="relative flex flex-shrink-0 w-50 sm:w-auto">
                <img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square" src="https://res.cloudinary.com/dkioj30sz/image/upload/v1708709101/INDIA_CRICKET_ODI_JERSEY_MEN_Blue_JE_0098_21_model_74f29da5dd.jpg" alt="Image 3" />
              </div>
              <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                <img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square" src="https://res.cloudinary.com/dkioj30sz/image/upload/v1708709101/T20_INTERNATIONAL_CRICKET_JERSEY_Blue_JE_0093_21_model_64d0832f5a.jpg" alt="Image 4" />
              </div>
              <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                <img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square" src="https://res.cloudinary.com/dkioj30sz/image/upload/v1708709101/INDIA_CRICKET_ODI_JERSEY_MEN_Blue_JE_0098_22_model_9351bab77b.jpg" alt="Image 5" />
              </div>
              <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                <img className="object-cover object-center dark:bg-gray-500 h-96 aspect-square" src="https://res.cloudinary.com/dkioj30sz/image/upload/v1708709101/INDIA_CRICKET_ODI_JERSEY_MEN_Blue_JE_0098_23_hover_model_373d5fbbb0.jpg" alt="Image 5" />
              </div>
            </div>              
          </div>
        </div>
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 lg:pb-5 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leadi sm:text-5xl ">Premium
            <p>
              <span className='rounded-2xl'>Gazzeti_</span>
              <span className=" palet rounded-2xl ">Collection</span>
            </p>
          </h1>
        </div>

      </section>



      <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center">
        {gazzeticard(shoe03, "Gazzeti Blue")}
        {gazzeticard(shoe02, "Gazzeti Brown")}
        {gazzeticard(shoe03, "Gazzeti Green")}
      </div>

      <div className="p-6 py-16">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracki font-bold">Up to
              <br className="sm:hidden" />50% Off
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Plus free shipping! Use code:</span>
              <span className="font-bold text-lg">MAMBA</span>
            </div>
            <button href="#" rel="noreferrer noopener" className="transit px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:text-gray-900 border-slate-600 ">Shop Now </button>
          </div>
        </div>
      </div>

      <div className="mainhero container">      
        <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center ">
          {data.data.map(skeletonmens)}
        </div>
      </div>
    </div>
  )
}

export default Hero



