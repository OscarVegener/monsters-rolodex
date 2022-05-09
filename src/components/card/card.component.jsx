import { Component } from "react";
import "./card.styles.css";

class Card extends Component {
    render() {
        const { id, email, name} = this.props.monster;
        return (
            <div className="card">
                <img alt={`monster ${name}`} src={`https://robohash.org/${id}`}/>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        );
    }
}

export default Card;
