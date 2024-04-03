import React from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';



const ProDetailsMens = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    
    const { loading, error, data } = useFetch(import.meta.env.VITE_API_URL + `/api/mens-products/${id}?populate=*`)

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
       navigate('/cart')
    }
    alert('Product added to cart')
  }

  

    return (
        <>
            <div className="">
                <div className="bg-gray-100 dark:bg-gray-800 py-8">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row -mx-4">
                            <div className="md:flex-1 px-4">
                                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4 sm:w-96">
                                    <img className="w-full h-full object-cover" src={data.data.attributes.Image.data.attributes.url} alt="Product Image" />
                                </div>
                                <div className="flex -mx-2 mb-4">
                                    <div className="w-1/2 px-2">
                                        <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700" onClick={()=> handleCart(data.data,true)}>Add to Cart</button>
                                    </div>
                                    <div className="w-1/2 px-2">
                                        <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600" onClick={()=> handleCart(data.data,true)}>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="md:flex-1 px-4">
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{data.data.attributes.Title}</h2>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                    {data.data.attributes.Subcategory}
                                </p>
                                <div className="flex mb-4">
                                    <div className="mr-4">
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                        <span className="text-gray-600 dark:text-gray-300">${data.data.attributes.Price}</span>
                                    </div>
                                    <div>
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                                        <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Available Colors:</span>
                                    <div className="flex items-center mt-2">
                                        <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                                        
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
                                    <div className="flex items-center mt-2">
                                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
                                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
                                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
                                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
                                    </div>
                                </div>
                                <div>
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                         {data.data.attributes.Description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ProDetailsMens