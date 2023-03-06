import {RxCross2} from"react-icons/rx"

export function Carshopping(props,{cartItem}){
    const shop = cartItem

    const totalPrice = shop.reduce((price , item) => price + item.price * item.quantidade, 0)
    console.log(totalPrice)
    return(
        <div className='carShopping'>
        
            <button onClick= {() => props.setVisivel(false)}><RxCross2/></button>
            <div className='content'>
                
            </div>
            <h1 className='total'>Total: </h1>
           <div className="btn-Carsho">
            <button>Finalizar compra</button>
            <button>Ver carrinho</button>
           </div>
        </div>
    )
}