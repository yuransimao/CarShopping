import { Cards } from './Components/Cards/card'
import { Navbar } from './Components/NavBar/navbar'
import './App.css'

import itens from './itens'

import { useState } from 'react'



function App() {
  
  const [cartItem, setCartItem] = useState([])
 
  
  const addItens = (product) =>{
  const cart =[...cartItem]
  const ProductExist = cart.find(item => item.id === product.id)

  if(!ProductExist){
    setCartItem([...cart, {...product, quantity : 1}])
  }
  else{
  
    setCartItem(cart.map((item) => (
      item.id === product.id ? {...ProductExist, quantity : product.stock >= ProductExist.quantity && ProductExist.quantity + 1  , stock : --ProductExist.stock <=0 } : item
    )))
    

  }  

}



  return (
    <div className="App">
       <Navbar cartItem={cartItem}/>
      <div className="App-Card">
        {itens.map((item) => (
          <Cards key={item.id}
          name ={item.name}
          price= {item.price}
          img={item.img}
          add={addItens}
          item={item}
          cartItem ={cartItem}

          />
        ))}
      </div>
    </div>

  )
}

export default App
