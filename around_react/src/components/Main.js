import { useEffect, useState } from "react";
import {api} from "../utils/api.js";

const getUserData = () => {
  api.getUserInfo()
  .then(res => console.log(res))
}

function Main({
  onEditAvatarClick,
  onEditProfileClick,
  onAddPlaceClick,
  
}) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar ] = useState('');


  return (
    <main className="content">
      <section className="profile">
        <div className="profile__pic" onClick={onEditAvatarClick}></div>
        <div className="profile__info">
          <h1 className="profile__name" id="name">
            Jacques Cousteau
          </h1>
          <button
            className="profile__edit"
            onClick={onEditProfileClick}
            type="button"
          ></button>
          <p className="profile__subtitle" id="about">
            Explorer
          </p>
        </div>
        <button
          className="profile__add"
          onClick={onAddPlaceClick}
          type="button"
        ></button>
      </section>

      <section className="photos">
        <ul className="photos__list"></ul>
      </section>

    </main>
  );
}

export default Main;