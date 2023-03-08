//import {IoBagAddOutline} from "react-icons/io"

export function Cards(props){

    
    return (
        <div className="Container-card">
            <div className="img">
            <img src={props.img} alt={props.name} />
            </div>
           
            <div className="Cardbx">
                <h1>{props.name}</h1>
                <h2>{props.price}<span>Kz</span></h2>
            <div className="btn">
                <button onClick={() => props.add(props.item)}>Add</button>
            </div>
            </div>
        </div>

    )
}