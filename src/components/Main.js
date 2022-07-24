import { useEffect, useState } from "react";
import { api } from "../utils/api.js";
import Card from "./Card.js";

function Main({
  onEditAvatarClick,
  onEditProfileClick,
  onAddPlaceClick,
  onCardClick,
}) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__pic"
          style={{ backgroundImage: `url(${userAvatar})` }}
          onClick={onEditAvatarClick}
        ></div>
        <div className="profile__info">
          <h1 className="profile__name" id="name">
            {userName}
          </h1>
          <button
            className="profile__edit"
            onClick={onEditProfileClick}
            type="button"
          ></button>
          <p className="profile__subtitle" id="about">
            {userDescription}
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
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
