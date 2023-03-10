import { useState } from 'react'

export function CartItens(){

    const [cartItem, setCartItem] = useState([])


  const addItens = (product) => {
    const cart = [...cartItem]
    const ProductExist = cart.find(item => item.id === product.id)

    if (!ProductExist) {
      setCartItem([...cart, { ...product, quantity: 1 }])
    }
    else {

      setCartItem(cart.map((item) => (
        item.id === product.id ? { ...ProductExist, quantity: product.stock >= ProductExist.quantity && ++ProductExist.quantity, stock: --ProductExist.stock <= 0 } : item
      )))


    }


  }



  const removequantity = (product) => {
    const carts = [...cartItem]
    const ProductExist = carts.find(item => item.id === product.id)

    if (ProductExist.quantity === 1) {
      setCartItem(carts.filter((item) => (item.id !== product.id)))
    }
    else {
      setCartItem(carts.map((item) => (
        item.id === product.id ? { ...ProductExist, quantity: --ProductExist.quantity , stock: ++ProductExist.stock } : item
      )))
    }

  }

  return{
    removequantity,
    addItens,
    cartItem
  }

}