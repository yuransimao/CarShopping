import { Cards } from './Components/Cards/card'
import './App.css'

import itens from './itens'

import { useState } from 'react'



function App() {

  const [cartItem, setCartItem] = useState([])
 
  const addItens = (product) =>{
   const cart =[...cartItem]

  const ProductExist = cart.find(item => item.id === product.id)
  
  if(ProductExist){
    
    setCartItem(cart.map( itens => (
      itens.id === product.id && {...ProductExist, quantity : ProductExist.quantity + 1}
    ) ))
  }

  else{
    setCartItem([...cart, {...product , quantity : 1}])
  }
  
}
console.log(cartItem)


  return (
    <div className="App">
      {itens.map((item) => (
        <Cards key={item.id}
        name ={item.name}
        price= {item.price}
        img={item.img}
        add={addItens}
        item={item}
        />
      ))}
    </div>

  )
}

export default App
