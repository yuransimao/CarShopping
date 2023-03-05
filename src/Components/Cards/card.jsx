//import {IoBagAddOutline} from "react-icons/io"

export function Cards(props){
    return (
        <div className="Container-card">
            <div className="title">
                <h1>{props.name}</h1>
            </div>
            <div className="img">
            <img src={props.img} alt={props.name} />
            </div>
            <div>
                <h2>{props.price}<span>Kz</span></h2>
            </div>

            <div className="btn">
                <button onClick={() => props.add}>Add</button>
            </div>
        </div>
    )
}