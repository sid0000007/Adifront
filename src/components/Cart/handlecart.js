
import { useNavigate } from 'react-router-dom';

function handleCart(product, redirect){
    console.log(product)
    const navigate = useNavigate()
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
    alert('Product added to cart')
    if(redirect === true) {
      navigate('/cart')
    }
  }


export default handleCart
