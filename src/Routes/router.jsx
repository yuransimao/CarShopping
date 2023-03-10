import { Home } from "../Components/pages/Home/home"
import { Carrinho } from "../Components/pages/Carrinho/carrinho"
import { Finalizar } from "../Components/pages/Finalizar/Finalizar"
import { Navbar } from "../Components/NavBar/navbar"
import { CartItens } from "../Components/Hooks/useCart"
import { BrowserRouter, Route, Routes } from "react-router-dom"




export function Routers() {
    const {removequantity,addItens, cartItem} = CartItens()
  
  return (
    <>
      <BrowserRouter>
        <Navbar cartItem={cartItem} removequantity={removequantity} />
        <Routes>
          <Route exact path="/" element={<Home addItens={addItens} cartItem={cartItem} />} />
          <Route path="/Carrinho" element={<Carrinho cartItem={cartItem} />} />
          <Route path="/Finalizar" element={<Finalizar cartItem={cartItem} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}