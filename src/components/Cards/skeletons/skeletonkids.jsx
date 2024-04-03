import React from "react";
import {Link, useNavigate} from 'react-router-dom';
import ProDetailsKids from "../proddetails/ProdetailsKids";

const skeletonkids = (prod) => {
  
  const handleCart = (product, redirect) => {
    
   
    console.log(product)
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const isProductExist = cart.find(item => item.id === product.id)
    if(isProductExist) {
      const updatedCart = cart.map(item => {
        if(item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1
          }
        }
        return item
      })
      localStorage.setItem('cart', JSON.stringify(updatedCart))
    } else {
      localStorage.setItem('cart', JSON.stringify([...cart, {...product, quantity: 1}]))
    }
    if(redirect){
      
    }
    alert('Product added to cart')
  }


  return (
    <div key={prod.id} className="">
       
    
      <div className="sellcard" >

      
        <div className="w-5/5 max-w-lg bg-white border border-gray-200 rounded-lg shadow-2xl palet">
          <a href="#">
          <Link to={`/ProDetailsKids/${prod.id}`}>
            <img className="p-8 rounded-t-lg" src={prod.attributes.Image.data.attributes.url} alt="product image" onClick={()=> ProDetailsKids()}/>
            </Link>
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{prod.attributes.Title}</h5> 
            </a>
          
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{prod.attributes.Price + '$'}</span>
              
              
              
              <button href="#" className="text-owhite bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center owhite dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-95 duration-75" onClick={()=>handleCart(prod,true)}>
                Add to cart
                </button>
                
                
            </div>
          </div>
        </div>

      </div>
    
    </div>
  );
}
export default skeletonkids;

