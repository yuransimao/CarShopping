import {RxCross2} from"react-icons/rx"

export function Carshopping(props){
    return(
        <div className='carShopping'>
            <button onClick= {() => props.setVisivel(false)}><RxCross2/></button>
            <h1 className='total'>total</h1>
           <div className="btn-Carsho">
            <button>Finalizar compra</button>
            <button>Ver carrinho</button>
           </div>
        </div>
    )
}