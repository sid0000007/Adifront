import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function cart() {
	const navigate = useNavigate()
	const [total, setTotal] = useState(0)
	const cart = JSON.parse(localStorage.getItem('cart')) || [];

	useEffect(() => {
		const total = cart.reduce((acc, item) => {
		  return acc + (item.attributes.Price * item.quantity)
		}, 0)
		setTotal(total)
	  }, [cart])	

	//   if cart has no items
	if (cart.length == 0) {
		return (
			<div className=' h-[55vh] flex justify-center items-center text-4xl '>Cart is Empty</div>
		)
	}

	const handleInc = (id) => {
		const updatedCart = cart.map(item => {
		  if(item.id === id) {
			return {
			  ...item,
			  quantity: item.quantity + 1
			}
		  }
		  return item
		})
		localStorage.setItem('cart', JSON.stringify(updatedCart))
		navigate('/cart')
		
	  }
	
	  const handleDec = (id) => {
		const updatedCart = cart.map(item => {
		   if(item.id === id && item.quantity >=2) {
			return {
			  ...item,
			  quantity: item.quantity - 1
			}
		  }
		  return item
		})
		localStorage.setItem('cart', JSON.stringify(updatedCart))
		navigate('/cart')
		
	  }

	  const removeProduct = (id) => {
		const updatedCart = cart.filter(item => item.id !== id)
		localStorage.setItem('cart', JSON.stringify(updatedCart))
		navigate('/cart')
	  }
	
	return (
		<>
			<div className="container mx-auto px-4 py-8">
				<div className="flex flex-col md:flex-row md:justify-between md:items-center">
					<h1 className="text-2xl font-bold my-4">Shopping Cart</h1>
					<button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
						Checkout
					</button>
				</div>
				
				{cart.map(item=>{
					return(
						<div className="mt-8" key={item.id}>
						<div className="flex flex-col  border-b border-gray-400 py-4 md:flex-row">
							<div className="flex-shrink-0 pb-16">
								<img src={item.attributes.Image.data.attributes.url} alt="Product image" className="w-32 h-32 object-cover" />
							</div>
							<div className="mt-4 md:mt-0 md:ml-6">
								<h1 className="text-lg font-bold">{item.attributes.Title}</h1>
								<p className="text-sm">{item.attributes.Subcategory}</p>
								<h4 className="text-sm">${item.attributes.Price}</h4>
								<p className="mt-2 text-gray-600">{item.attributes.Description}</p>
								<div className="mt-4 flex items-center flex-col">
									<span className="mr-2 text-gray-600">Quantity:{item.quantity}</span>
									<div className="flex items-center">
									
										<button className="bg-gray-200 rounded-l-lg px-2 py-1" onClick={()=> handleDec(item.id)}>-</button>
										<span className="mx-2 text-gray-600">{item.quantity}</span>
										<button className="bg-gray-200 rounded-r-lg px-2 py-1" onClick={() => handleInc(item.id)}>+</button>
									</div>
	                              
								</div>
								<div className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer" onClick={() => removeProduct(item.id)}>Remove</div>
							</div>
							<span className="ml-auto font-bold">${item.attributes.Price* item.quantity}</span>
						</div>
						
					</div>

					)
				})}
			    
				<div className="flex justify-end items-center mt-1 mb-0">
					<span className="text-gray-500 mr-9">Delivery:</span>
					<span className="text font-bold mr-1">${(total/100)*10}</span>
				</div>
				
				<div className="flex justify-end items-center mt-8">
					<span className="text-gray-600 mr-4">Total Amount:</span>
					<span className="text-xl font-bold">${total + ((total/100)*10)}</span>
				</div>
			</div>
		</>
	)
}

export default cart;
