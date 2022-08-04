import PopupWithForm from "./PopupWithForm";
import React, { useState, useEffect } from "react";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name,
      link,
    });
  }

  // reseting form when the form is opened
  useEffect(() => {
    if (isOpen) {
      setName("");
      setLink("");
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      name="new-image"
      title="New place"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Create"
      onSubmit={handleSubmit}
    >
      <label className="popup__label" htmlFor="title">
        Type here the photo title
      </label>
      <input
        id="imageName"
        className="popup__input popup__input_title"
        onChange={handleNameChange}
        value={name}
        type="text"
        placeholder="Title"
        required
        minLength="1"
        maxLength="30"
      />
      <span className="imageName-input-error" />
      <label className="popup__label" htmlFor="link">
        Type here the photo URL
      </label>
      <input
        id="link"
        className="popup__input popup__input_url"
        onChange={handleLinkChange}
        value={link}
        type="url"
        placeholder="Image URL"
        required
      />
      <span className="link-input-error" />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
