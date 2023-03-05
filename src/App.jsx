import { Cards } from './Components/Cards/card'
import './App.css'

import itens from './itens'



function App() {
 
  const addItens = (produt) =>{
    console.log('teste')
  }

  return (
    <div className="App">
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

  )
}

export default App
