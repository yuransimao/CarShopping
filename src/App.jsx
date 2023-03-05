import { Cards } from './Components/Cards/card'
import './App.css'
const 
import itens from './itens'



function App() {
 

  return (
    <div className="App">
      {itens.map((item) => (
        <Cards key={item.id}
        name ={item.name}
        price= {item.price}
        img={item.img}
        />
      ))}
    </div>

  )
}

export default App
