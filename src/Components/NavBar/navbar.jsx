import {BsCart4} from "react-icons/bs"
import { Carshopping } from "./carshop" 

import {useState} from "react"
export function Navbar ({cartItem, removequantity}){

    
   
    const [visivel, setVisivel] = useState( false)
    return(
    <>
        <div className="Navbar">
            <div className="carrinho">
                <button onClick ={() => setVisivel(true)}><BsCart4/></button>
            </div>
        </div>
           {visivel === true ? < Carshopping cartItem={cartItem} removequantity={removequantity} setVisivel ={setVisivel}/> : false}
        </>
    )
}