import { Table } from "../../Table/table"
export function Finalizar ({cartItem}){
    return(
        <div className="Finalizar">
        <Table cartItem= {cartItem}/>
        </div>
    )
}