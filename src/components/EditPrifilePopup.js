import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [about, setAbout] = useState(currentUser.about);

  useEffect(() => {
    setName(currentUser.name || '');
    setAbout(currentUser.about || '');
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleAboutChange(e) {
    setAbout(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Edit profile"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Save"
      onSubmit={handleSubmit}
    >
      <label className="popup__label" htmlFor="name">
        Type here your name
      </label>
      <input
        id="profileName"
        className="popup__input popup__name"
        value={name}
        onChange={handleNameChange}
        type="text"
        placeholder="Name"
        required
        minLength="2"
        maxLength="40"
      />
      <span className="profileName-input-error" />
      <label className="popup__label" htmlFor="about">
        Type here about yourself
      </label>
      <input
        id="profileAbout"
        className="popup__input popup__about"
        value={about}
        onChange={handleAboutChange}
        type="text"
        placeholder="About me"
        required
        minLength="2"
        maxLength="200"
      />
      <span className="profileAbout-input-error" />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
