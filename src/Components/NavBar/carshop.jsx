import {RxCross2} from"react-icons/rx"


export function Carshopping({cartItem, setVisivel}){
    const shop = cartItem


    const totalPrice = shop && shop.reduce((price , item) => price + item.price * item.quantity, 0)

    
    return(
        <div className='carShopping'>
        
            <button onClick= {() => setVisivel(false)}><RxCross2/></button>
            <div className='content'>
                
            </div>
            <h1 className='total'>Total:<span>{totalPrice}</span> </h1>
            <div className="carShopping-item">
               {shop.map( item => (
                <>
                <div className="carShopping-item-name">{item.name}</div>
                <div className="carShopping-item-name">{item.quantity}</div>
                </>
               ))} 
            </div>

            {shop.length >= 1 &&
           <div className="btn-Carsho">
            <button>Finalizar compra</button>
            <button>Ver carrinho</button> 
           </div>}
        </div>
    )
}