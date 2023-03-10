export function Table({cartItem}){
    return(
        <>       {cartItem.length === 0 ? <h1>Não possuis Nenhum item no carrinho</h1> : (
            <div className="Table">
            <table className="content-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                {cartItem?.map((item)=>(
                    <tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.quantity * item.price}</td>
                    </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
        )}</>
    )
}