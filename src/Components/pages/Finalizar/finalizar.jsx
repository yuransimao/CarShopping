import { Table } from "../../Table/table"
import {Link} from "react-router-dom"
export function Finalizar ({cartItem}){
    return(
        <div className="Finalizar">
        <Table cartItem= {cartItem}/>
        <Link to={`https://wa.me/244924622482?text=${<Table/>}` }> Finalizar Compra</Link>
        </div>
    )
}