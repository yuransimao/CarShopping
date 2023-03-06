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

  if(ProductExist){
      setCartItem(cart.map( item =>
        item.id === product.item && {...ProductExist, quantidade : ProductExist.quantidade + 1}
        ))
  }
  else{
    setCartItem([...cart, {...product, quantidade : 1}])
  }
}



  return (
    <div className="App">
       <Navbar/>
      <div className="App-Card">
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
    </div>

  )
}

export default App
