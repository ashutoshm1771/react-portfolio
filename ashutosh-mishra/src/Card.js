import React from 'react';
import "./Card.css";

function Card(props) {
    return (
        <div className="card">
            <div className="card__info">
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}

export default Card;
