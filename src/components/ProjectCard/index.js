import React from 'react';

function Card(item) {

    return (
        <div className="img-card" >
            <a href = {item.url} target="_blank" rel="noopener noreferrer">
                <img class="card-img-top img-fluid mb-4" src={item.img} alt={item.name}/>
                <div class="img-card-body">
                    <h3>{item.name}</h3>
                </div>
            </a>
        </div>
    )
}

export default Card;