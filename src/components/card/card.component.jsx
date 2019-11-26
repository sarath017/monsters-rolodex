import React from 'react';

import './card.styles.css'

export const Card = props => (
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.mons.id}?set=set2&size=250x250`}></img>
        <h2>{props.mons.name}</h2>
        <p>{props.mons.email}</p>
    </div>
)