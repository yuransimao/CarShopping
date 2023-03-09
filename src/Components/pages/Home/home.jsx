import itens from '../../../itens'
import { Cards } from '../../Cards/card'
export function Home({cartItem,addItens}){
    
    return(
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
    )
}