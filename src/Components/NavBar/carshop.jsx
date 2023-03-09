import {RxCross2} from"react-icons/rx"
import {Link} from "react-router-dom"


export function Carshopping({cartItem, setVisivel, removequantity}){
    const shop = cartItem


    const totalPrice = shop && shop.reduce((price , item) => price + item.price * item.quantity, 0)

    
    return(
        <div className='carShopping'>
        
            <button className='carShopping-button' onClick= {() => setVisivel(false)}><RxCross2/></button>
            <div className='content'>
                
            </div>
            <h1 className='total'>Total:<span>{totalPrice}</span> </h1>
            <div className="carShopping-item">
               {shop.map( item => (
                <div className='item'>
                <div className="carShopping-item-name">{item.name}</div>
                <div className="carShopping-item-quantity">{item.quantity}</div>
                <div className="carShopping-item-img"><img src={item.img} /></div>
                <div className="carShopping-item-quantity-price">{item.quantity * item.price}</div>
                <button className="carShopping-item-button" onClick ={removequantity(item)}> <RxCross2/> </button>
                
                </div>
               ))} 
            </div>

            {shop.length >= 1 &&
           <div className="btn-Carsho">
            <Link to='/Finalizar'>Finalizar compra</Link>
            <Link to='/Carrinho'>Ver carrinho</Link> 
           </div>}
        </div>
    )
}