import React from "react";
import { useEffect, useState } from "react";
import api from "../utils/api.js";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  onEditAvatarClick,
  onEditProfileClick,
  onAddPlaceClick,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  //   useEffect(() => {
  //   const x = cards.map(item => {
  //     return item.likes
  //   })
  //   console.log(x)
  // })

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__pic"
          style={{ backgroundImage: `url(${currentUser.avatar})` }}
          onClick={onEditAvatarClick}
        ></div>
        <div className="profile__info">
          <h1 className="profile__name" id="name">
            {currentUser.name}
          </h1>
          <button
            className="profile__edit"
            onClick={onEditProfileClick}
            type="button"
          ></button>
          <p className="profile__subtitle" id="about">
            {currentUser.about}
          </p>
        </div>
        <button
          className="profile__add"
          onClick={onAddPlaceClick}
          type="button"
        ></button>
      </section>

      <section className="photos">
        <ul className="photos__list">
          {cards.map((card) => {
            return (
              <Card
                card={card}
                key={card._id}
                link={card.link}
                name={card.name}
                likes={card.likes.length}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
