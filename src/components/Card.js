import React from "react";

function Card({card}) {
  return (
    <li className="card">
      <img className="card__img" src={card.link} alt={card.name}></img>
      <button className="card__button-delete" type="button" aria-label="Удалить"></button>
      <div className="card__inner">
        <h2 className="card__caption">{card.name}</h2>
        <div className="card__like">
          <button className="card__button-like" type="button" aria-label="Лайк"></button>
          <p className="card__amount-like">{card.likes.length}</p>
        </div>
      </div>
    </li>
 )
}

export default Card;