import {Home} from "../Components/pages/Home/home"
import {Carrinho} from "../Components/pages/Carrinho/carrinho"
import {Finalizar} from "../Components/pages/Finalizar/Finalizar"
import {Navbar} from "../Components/NavBar/navbar"

import {BrowserRouter, Route, Routes} from "react-router-dom"

import { useState } from 'react'


export function Routers(){

    const [cartItem, setCartItem] = useState([])
 
  
  const addItens = (product) =>{
  const cart =[...cartItem]
  const ProductExist = cart.find(item => item.id === product.id)

  if(!ProductExist){
    setCartItem([...cart, {...product, quantity : 1}])
  }
  else{
  
    setCartItem(cart.map((item) => (
      item.id === product.id ? {...ProductExist, quantity : product.stock >= ProductExist.quantity && ++ProductExist.quantity   , stock : --ProductExist.stock <=0 } : item
    )))
    

  }  
 
  
}
        return(
            <>
        <BrowserRouter>
            <Navbar cartItem={cartItem}/>
            <Routes>
                <Route exact path="/" element={<Home addItens= {addItens} cartItem={cartItem}  />}/>
                <Route path="/Carrrinho" element={<Carrinho cartItem={cartItem} />}/>
                <Route path="/Finalizar" element={<Finalizar cartItem={cartItem}/>}/>
            </Routes>
        </BrowserRouter>
        </>
        )
}